from django.views.decorators.http import require_http_methods
from django.http import JsonResponse, HttpResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from .models import Exercise, Reviewer
from .serializers import ReviewerSerializer, ExerciseSerializer
from django.core.cache import cache
import requests
import os
from dotenv import load_dotenv


# Load the API key from an environment variable
load_dotenv()
api_key = os.environ.get('API_KEY')


@csrf_exempt
@require_http_methods(["GET"])
def get_exercises(request):
    # Check if the exercises are cached
    exercises = cache.get('exercises')
    if not exercises:
        # If not, fetch the exercises from the database
        exercises = Exercise.objects.all()
        # Cache the exercises for future requests
        cache.set('exercises', exercises)
    # Serialize the exercises
    serializer = ExerciseSerializer(exercises, many=True)
    return JsonResponse(serializer.data, safe=False)


@csrf_exempt
@require_http_methods(["POST"])
def save_exercise_from_api(request):
    exercise_type = ['cardio', 'olympic_weightlifting', 'plyometrics', 'powerlifting', 'strength', 'stretching',
                     'strongman']

    # Create a list to store the new exercises
    new_exercises = []

    for e in exercise_type:
        offset = 0
        while True:
            response = requests.get('https://api.api-ninjas.com/v1/exercises',
                                    headers={'X-Api-Key': api_key},
                                    params={'type': e, 'offset': offset})
            datas = response.json()

            if not datas:
                # No more data, break out of the loop
                break

            for data in datas:
                # Check if the data already exists in the database, if not create
                exercise, created = Exercise.objects.get_or_create(
                    name=data.get("name", "default value"),
                    exercise_type=data.get("type", "default value"),
                    muscle=data.get("muscle", "default value"),
                    equipment=data.get("equipment", "default value"),
                    difficulty=data.get("difficulty", "default value"),
                    instructions=data.get("instructions", "default value")
                )
                if created:
                    # If the exercise is new, add it to the list
                    new_exercises.append(exercise)

            # Update the offset value by 10 to get the next set of results
            offset += 10

    # Use the `bulk_create` method to efficiently insert multiple records into the database
    Exercise.objects.bulk_create(new_exercises)
    # Clear the cache to reflect the updated list of exercises
    cache.delete('exercises')
    # Display a success message to the user
    return HttpResponse("Exercises fetched successfully")


@csrf_exempt
@require_http_methods(['GET'])
def get_reviews(request):
    # retrieve all reviewers
    reviewers = Reviewer.objects.all()
    # serialize reviewers into JSON
    serializer = ReviewerSerializer(reviewers, many=True)
    return JsonResponse(serializer.data, safe=False)


@csrf_exempt
@require_http_methods(['GET'])
def exercise_reviews(request, exercise_id):
    reviewers = ReviewerSerializer.get_reviewers_from_exercise(exercise_id=exercise_id)
    serializer = ReviewerSerializer(reviewers, many=True)
    return JsonResponse(serializer.data, safe=False)


@csrf_exempt
@require_http_methods(['POST'])
def submit_review(request):
    data = JSONParser().parse(request)
    serializer = ReviewerSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=201)
    return JsonResponse(serializer.errors, status=400)



