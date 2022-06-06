from django.db import models

from accounts.models import User
from base import BaseModel


class UserGroup(BaseModel):
    """
    Model to represent a group of users who can see updates on eachothers' recommendation
    submissions, progress, and have discussions.
    """
    name = models.CharField(max_length=128, blank=False)
    description = models.CharField(max_length=512, blank=True)
    # group picture
    owner = models.ForeignKey(User, related_name='user_groups', on_delete=models.CASCADE)
    users = models.ManyToManyField(
        User, help_text='The users in this group; does not include the owner.')


class FriendRequest(BaseModel):
    """Model to represent a friend request from a user to another user."""
    from_user = models.ForeignKey(User, related_name='friend_requests_from', on_delete=models.CASCADE)
    to_user = models.ForeignKey(User, related_name='friend_requests_to', on_delete=models.CASCADE)
    expires_on = models.DateTimeField(null=True, blank=True)


class Friendship(BaseModel):
    """
    Model to represent a friendship between two users. Has a 1-1 mapping with
    FriendRequest.
    """
    friend_request = models.OneToOneField(FriendRequest, on_delete=models.CASCADE)


# class Comment(BaseModel):
#     """
#     Model to represent a comment created by a user.
#
#     This will probably be subclassed down the road so we can have FKs to parents.
#     Possibly instead of subclassing use the generic foreign key pattern.
#     """
#     author = models.ForeignKey(User, on_delete=models.CASCADE)
#     body = models.CharField(max_length=256, blank=False)

# class Like(BaseModel):
#     """
#     Model to represent a user "liking" something.
#
#     This will probably be subclassed down the road so we can have FKs to parents.
#     Possibly instead of subclassing use the generic foreign key pattern.
#     """
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#
