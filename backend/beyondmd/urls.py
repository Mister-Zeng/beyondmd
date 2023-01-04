from django.urls import path
from .views import get_exercises, submit_review, exercise_reviews, get_exercise_by_id

urlpatterns = [
    path('exercise/', get_exercises),  # Retrieve all exercise
    path('exercise/<int:pk>/', get_exercise_by_id, name='get_exercise_by_id'),  # Get exercise by id

    path('review/exercise/<int:exercise_id>', exercise_reviews),  # Get all reviews from a particular exercise
    path('review/', submit_review),  # Submit a review
]
