from rest_framework import viewsets, permissions
from .models import Piece, Recommendation, Rating
from .serializers import PieceSerializer, RecommendationSerializer, RatingSerializer

class PieceViewSet(viewsets.ModelViewSet):
    queryset = Piece.objects.all()
    serializer_class = PieceSerializer
    permission_classes = (permissions.IsAuthenticated, )


class RecommendationViewSet(viewsets.ModelViewSet):
    queryset = Recommendation.objects.all()
    serializer_class = RecommendationSerializer
    permission_classes = (permissions.IsAuthenticated, )


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    permission_classes = (permissions.IsAuthenticated, )


