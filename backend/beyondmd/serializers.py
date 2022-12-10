from django.utils import timezone
from rest_framework import serializers
from .models import Reviewer


def delete(instance):
    # Delete the object that the serializer is representing
    instance.delete()


class ReviewerSerializer(serializers.Serializer):
    # RATING_CHOICES = (
    #     (1, '1 star'),
    #     (2, '2 stars'),
    #     (3, '3 stars'),
    #     (4, '4 stars'),
    #     (5, '5 stars'),
    # )
    #
    # first_name = serializers.CharField(max_length=30)
    # last_name = serializers.CharField(max_length=30)
    # rating = serializers.ChoiceField(choices=RATING_CHOICES)
    # comment = serializers.CharField()
    # posted = serializers.DateTimeField(default=timezone.now)

    class Meta:
        model = Reviewer
        fields = '__all__'

    def create(self, validated_data):
        return Reviewer.objects.create(validated_data)

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.rating = validated_data.get('rating', instance.rating)
        instance.comment = validated_data.get('comment', instance.comment)
        instance.posted = validated_data.get('posted', instance.posted)

