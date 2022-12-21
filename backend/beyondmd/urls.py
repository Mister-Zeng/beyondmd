from django.urls import path
from .views import exercise_view, reviewer_view

urlpatterns = [
    path('exercises/', exercise_view),
    path('exercise/reviewers/', reviewer_view)
]
