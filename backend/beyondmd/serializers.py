from rest_framework import serializers

from .models import Reviewer, Exercise


class ReviewerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviewer
        fields = ['id', 'first_name', 'last_name', 'rating', 'comment', 'posted', 'exercise']

    # This method takes an exercise_id argument and retrieves the Exercise object with that ID from the database. It
    # then filters the Reviewer objects to return only those that have the specified Exercise object as the exercise
    # field.
    @classmethod
    def get_reviewers_from_exercise(cls, exercise_id):
        exercise = Exercise.objects.get(id=exercise_id)
        return Reviewer.objects.filter(exercise=exercise)


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ['id', 'name', 'exercise_type', 'muscle', 'equipment', 'difficulty', 'instructions']