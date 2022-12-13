from abc import ABC

from django.utils import timezone
from rest_framework import serializers
from rest_framework.response import Response

from .models import Reviewer, Exercise


class ReviewerSerializer(serializers.Serializer):
    class Meta:
        model = Reviewer
        fields = ['__all__']

    def create(self, validated_data):
        return Reviewer.objects.create(validated_data)

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.rating = validated_data.get('rating', instance.rating)
        instance.comment = validated_data.get('comment', instance.comment)
        instance.posted = validated_data.get('posted', instance.posted)
        instance.exercise_id = validated_data.get('exercise_id', instance.exercise_id)
        instance.save()
        return instance

    def delete(self, request, pk):
        reviewer = Reviewer.objects.get(pk=pk)
        serializer = ReviewerSerializer(reviewer)
        serializer.delete(reviewer)
        return Response(status=204)


class ExerciseSerializer(serializers.Serializer):
    class Meta:
        model = Exercise
        fields = ['__all__']

    def create(self, validated_data):
        return Reviewer.objects.create(validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.type = validated_data.get('type', instance.type)
        instance.muscle = validated_data.get('muscle', instance.muscle)
        instance.difficulty = validated_data.get('difficulty', instance.difficulty)
        instance.instructions = validated_data.get('instructions', instance.instructions)
        instance.save()
        return instance

    def delete(self, request, pk):
        exercise = Exercise.objects.get(pk=pk)
        serializer = ExerciseSerializer(exercise)
        serializer.delete(exercise)
        return Response(status=204)
