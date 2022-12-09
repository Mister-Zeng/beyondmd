from django.db import models


# Create your models here.

class Reviewer(models.Model):
    RATING_CHOICES = [
        ('ONE_RATING', 1),
        ('TWO_RATING', 2),
        ('THREE_RATING', 3),
        ('FOUR_RATING', 4),
        ('FIVE_RATING', 5),
    ]

    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    rating = models.IntegerField(
        choices=RATING_CHOICES,
    )
    comment = models.CharField(max_length=50)
    posted = models.DateTimeField(auto_now=True)


class Exercise(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    type = models.CharField(max_length=30)
    muscle = models.CharField(max_length=30)
    difficulty = models.CharField(max_length=10)
    instructions = models.CharField(max_length=500)
