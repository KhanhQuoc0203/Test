from rest_framework import serializers
from .models import Tour

class TourSerializer(serializers.ModelSerializer):
    creator_name = serializers.ReadOnlyField(source='creator.username')
    creator_phone = serializers.ReadOnlyField(source='creator.phone')

    class Meta:
        model = Tour
        fields = '__all__'