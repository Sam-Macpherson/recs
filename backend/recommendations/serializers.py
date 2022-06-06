from .models import Piece, Recommendation, Rating
from rest_framework import serializers


class PieceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Piece
        fields = (
            'category', 'name', 'description', 'external_rating',
        )


class RecommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommendation
        fields = (
            'piece', 'giver', 'receiver', 'followed_on', 'ignored_on',
        )


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = (
            'recommendation', 'score',
        )
