from django.db import models
from django.utils import timezone


class Exercise(models.Model):
    name = models.CharField(max_length=100, unique=True)
    exercise_type = models.CharField(max_length=30)
    muscle = models.CharField(max_length=20)
    equipment = models.CharField(max_length=30)
    difficulty = models.CharField(max_length=20)
    instructions = models.TextField()

    def __str__(self):
        return self.name


class Reviewer(models.Model):
    RATING_CHOICES = (
        (1, '1 star'),
        (2, '2 stars'),
        (3, '3 stars'),
        (4, '4 stars'),
        (5, '5 stars'),
    )

    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    rating = models.IntegerField(choices=RATING_CHOICES)
    comment = models.CharField(max_length=2000)
    posted = models.DateTimeField(default=timezone.now)
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
