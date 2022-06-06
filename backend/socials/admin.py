from django.contrib import admin
from . import models


@admin.register(models.UserGroup)
class UserGroupAdmin(admin.ModelAdmin):
    list_display = (
        'name', 'description', 'owner',
    )


@admin.register(models.FriendRequest)
class FriendRequestAdmin(admin.ModelAdmin):
    list_display = (
        'from_user', 'to_user', 'expires_on',
    )


@admin.register(models.Friendship)
class FriendshipAdmin(admin.ModelAdmin):
    list_display = (
        'friend_request', 'created_on',
    )
