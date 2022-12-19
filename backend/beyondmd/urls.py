from django.urls import path
from .views import exercise_view, reviewer_view

urlpatterns = [
    path('exercises/', exercise_view),
    path('reviewers/', reviewer_view)
]
