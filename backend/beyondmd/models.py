from django.db import models
from django.utils import timezone


# Create your models here.

class Reviewer(models.Model):
    RATING_CHOICES = (
        (1, '1 star'),
        (2, '2 stars'),
        (3, '3 stars'),
        (4, '4 stars'),
        (5, '5 stars'),
    )

    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    rating = models.IntegerField(choices=RATING_CHOICES)
    comment = models.CharField(max_length=250)
    posted = models.DateTimeField(default=timezone.now)


class Exercise(models.Model):
    id = models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    name = models.CharField(max_length=30)
    type = models.CharField(max_length=30)
    muscle = models.CharField(max_length=20)
    difficulty = models.CharField(max_length=10)
    instructions = models.TextField()
    reviewer = models.ForeignKey(Reviewer)
