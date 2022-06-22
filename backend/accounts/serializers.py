from rest_framework import serializers

from accounts.models import User


class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()

    @staticmethod
    def get_full_name(obj):
        return obj.get_full_name()

    class Meta:
        model = User
        fields = (
            'full_name', 'give_rating', 'receive_rating', 'is_active',
        )
