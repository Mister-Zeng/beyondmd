from abc import ABC

from django.utils import timezone
from rest_framework import serializers
from rest_framework.response import Response

from .models import Reviewer, Exercise


class ReviewerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviewer
        fields = ['id', 'first_name', 'last_name', 'rating', 'comment', 'posted', 'exercise_id']

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


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'name', 'exercise_type', 'muscle', 'equipment', 'difficulty', 'instructions']

    def create(self, validated_data):
        return Exercise.objects.create(validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.exercise_type = validated_data.get('exercise_type', instance.type)
        instance.muscle = validated_data.get('muscle', instance.muscle)
        instance.equipment = validated_data.get('equipment', instance.equipment)
        instance.difficulty = validated_data.get('difficulty', instance.difficulty)
        instance.instructions = validated_data.get('instructions', instance.instructions)
        instance.save()
        return instance
