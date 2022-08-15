from django.contrib.auth.models import AbstractUser, UserManager, make_password
from django.db import models

from django.core.files.storage import FileSystemStorage

from base import BaseModel
from recs import settings
from recs.storage_backends import PublicImageStorage


class CustomUserManager(UserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """
        Create and save a user with the given username, email, and password.
        """
        if not email:
            raise ValueError("The given email must be set")
        email = self.normalize_email(email)
        # Lookup the real model class from the global app registry so this
        # manager method can be used in migrations. This is fine because
        # managers are by definition working on the real model.
        user = self.model(email=email, **extra_fields)
        user.password = make_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(email, password, **extra_fields)


def image_filename(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_id/filename
    return f'users/{instance.id}/{instance.profile_picture.name}'


def select_storage():
    return PublicImageStorage() if settings.USE_S3 else FileSystemStorage()


class User(AbstractUser, BaseModel):
    """
    Base user model.
    """

    objects = CustomUserManager()

    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    profile_picture = models.ImageField(
        null=True, blank=True,
        storage=select_storage,
        upload_to=image_filename,
    )
    bio = models.TextField(
        null=True, blank=True,
        max_length=1024,
        help_text='An optional short bio for users to describe themselves.',
    )
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    DEFAULT_SCORE = 100

    verified_on = models.DateTimeField(null=True, blank=True)
    # profile picture
    give_rating = models.PositiveSmallIntegerField(
        null=False, blank=False, default=DEFAULT_SCORE,
        help_text='A measure of how high quality the recommendations this user gives are.')
    receive_rating = models.PositiveSmallIntegerField(
        null=False, blank=False, default=DEFAULT_SCORE,
        help_text='A measure of how responsive to receiving recommendations this user is.')

    @property
    def friends(self):
        # Return all friends of this user.
        return []

    def delete(self, **kwargs):
        self.is_active = False
        BaseModel.delete(self, **kwargs)
