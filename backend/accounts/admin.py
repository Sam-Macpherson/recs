from django.contrib import admin
from . import models


@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        'first_name', 'last_name', 'is_active'
    )
