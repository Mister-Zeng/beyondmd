from django.urls import path
from .views import save_exercise_from_api, get_exercises, submit_review, exercise_reviews

urlpatterns = [
    path('api/exercise', save_exercise_from_api),
    path('exercises/', get_exercises),
    path('exercise/reviewers/', submit_review),
    path('exercise/<int:exercise_id>/reviews', exercise_reviews, name='exercise_reviews')
]
