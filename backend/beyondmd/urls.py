from django.urls import path
from .views import get_exercises, submit_review, exercise_reviews

urlpatterns = [
    path('exercise/', get_exercises),  # Retrieve all exercise

    path('review/exercise/<int:exercise_id>', exercise_reviews),  # Get all reviews from a particular exercise
    path('review/', submit_review),  # Submit a review
]
