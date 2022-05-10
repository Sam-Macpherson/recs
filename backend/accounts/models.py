from django.contrib.auth.models import AbstractUser
from django.db import models

from base import BaseModel


class User(AbstractUser, BaseModel):
    """
    Base user model.
    """
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
