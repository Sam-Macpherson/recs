from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

from accounts.models import User
from base import BaseModel
from recs import settings
from recs.storage_backends import PublicImageStorage
from django.core.files.storage import FileSystemStorage


def image_filename(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_id/filename
    return f'pieces/{instance.id}/{instance.picture}'


def select_storage():
    return PublicImageStorage() if settings.USE_S3 else FileSystemStorage()


class Piece(BaseModel):
    """
    Model to represent a piece of media on the site. These instances are not content owned
    by the site, they just are used to refer to real-world media. As such, the created_on, etc.
    fields this model maintains are not related to real-world events, they are just in relation
    to this site's database.

    In the future this model might diverge into multiple subclassed models to represent information
    about the various media types, i.e. Movies have a cast, books can be fiction/non-fiction etc.,
    but not for an MVP site.
    """
    CATEGORY_UNKNOWN = 100
    CATEGORY_MOVIE = 200
    CATEGORY_TV_SHOW = 300
    CATEGORY_BOOK = 400
    CATEGORY_MUSIC = 500
    CATEGORY_RESTAURANT = 600
    CATEGORY_CHOICES = (
        (CATEGORY_MOVIE, 'Movie'),
        (CATEGORY_TV_SHOW, 'TV Show'),
        (CATEGORY_BOOK, 'Book'),
        (CATEGORY_MUSIC, 'Music'),
        (CATEGORY_RESTAURANT, 'Restaurant'),
    )
    category = models.PositiveSmallIntegerField(choices=CATEGORY_CHOICES, default=CATEGORY_UNKNOWN)
    name = models.CharField(max_length=512, blank=False)
    # link to real-world content
    description = models.CharField(max_length=1024, blank=True)
    picture = models.ImageField(
        null=True, blank=True,
        storage=select_storage,
        upload_to=image_filename,
    )
    external_rating = models.DecimalField(
        max_digits=4, decimal_places=2, validators=[MinValueValidator(0), MaxValueValidator(10)],
        help_text='The rating this piece has in the real-world, based on whatever platform it '
                  'comes from, not from users on the site. Ranges from 0-10 with up to 2 decimal '
                  'places only. Not all sites use a scale out of 10, which is why we allow some '
                  'decimals for the conversion; 4.33/5 => 8.67/10.')

    def __str__(self):
        return f'{self.name} ({self.get_category_display()})'


class Recommendation(BaseModel):
    """The primary unit of the site. Users give each other recommendations."""
    piece = models.ForeignKey(Piece, on_delete=models.CASCADE)
    giver = models.ForeignKey(User, related_name='recs_given', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='recs_received', on_delete=models.CASCADE)

    followed_on = models.DateTimeField(
        null=True, blank=True,
        help_text='The date the receiver completed this recommendation. For example, the '
                  'date the receiver finished reading the book, or watching the movie.')
    ignored_on = models.DateTimeField(
        null=True, blank=True,
        help_text='The date the receiver decided to intentionally ignore this recommendation. For'
                  'example, "I am not going to read that book, sorry Jim."')

    def __str__(self):
        return f'{self.piece} ({self.giver}) -> ({self.receiver})'


class Rating(BaseModel):
    """
    A rating given to a recommendation. The rating will be applied to the piece via the recommendation. The site will
    figure out the bounty of recommending a piece given the rating and the popularity of the piece.
    """
    # Track the receiver (the person casting the rating) through the recommendation.
    recommendation = models.ForeignKey(Recommendation, on_delete=models.CASCADE)
    score = models.SmallIntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(10)],
        help_text='The rating the recommendation receiver is giving this recommendation. The site '
                  'requires that all ratings be out of 10, and whole numbers only.')

    def __str__(self):
        return f'{self.recommendation.piece} ({self.recommendation.receiver}) {self.score}/10'
