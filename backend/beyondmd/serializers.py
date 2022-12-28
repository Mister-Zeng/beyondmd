from rest_framework import serializers

from .models import Reviewer, Exercise


class ReviewerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviewer
        fields = ['id', 'first_name', 'last_name', 'rating', 'comment', 'posted', 'exercise']

    @classmethod
    def get_reviewers_from_exercise(cls, exercise_id):
        exercise = Exercise.objects.get(id=exercise_id)
        return Reviewer.objects.filter(exercise=exercise)


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'name', 'exercise_type', 'muscle', 'equipment', 'difficulty', 'instructions']