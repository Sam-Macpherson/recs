from django.contrib import admin
from . import models


@admin.register(models.Piece)
class PieceAdmin(admin.ModelAdmin):
    list_display = (
        'category', 'name', 'external_rating',
    )


@admin.register(models.Recommendation)
class RecommendationAdmin(admin.ModelAdmin):
    list_display = (
        'piece', 'giver', 'receiver', 'followed_on', 'ignored_on',
    )
    date_hierarchy = 'followed_on'


@admin.register(models.Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = (
        'recommendation', 'score', 'created_on',
    )
