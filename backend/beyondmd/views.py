from django.views.decorators.http import require_http_methods
from django.http import JsonResponse, HttpResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from .models import Exercise, Reviewer
from .serializers import ReviewerSerializer, ExerciseSerializer
import os
import requests
from dotenv import load_dotenv


@csrf_exempt
@require_http_methods(["GET"])
def get_exercises(request):
    exercises = Exercise.objects.all()
    serializer = ExerciseSerializer(exercises, many=True)
    return JsonResponse(serializer.data, safe=False)


@csrf_exempt
@require_http_methods(["POST"])
def save_exercise_from_api(request):
    load_dotenv()
    api_key = os.environ.get('API_KEY')
    exercise_type = ['cardio', 'olympic_weightlifting', 'plyometrics', 'powerlifting', 'strength', 'stretching',
                     'strongman']

    for e in exercise_type:

        offset = 0
        while True:
            response = requests.get('https://api.api-ninjas.com/v1/exercises',
                                    headers={'X-Api-Key': api_key},
                                    params={'type': e, 'offset': offset})
            datas = response.json()
            print(len(datas), e)
            if not datas:
                # No more data, break out of the loop
                break

            for data in datas:
                # Check if the data already exists in the database, if not create
                Exercise.objects.get_or_create(
                    name=data.get("name", "default value"),
                    exercise_type=data.get("type", "default value"),
                    muscle=data.get("muscle", "default value"),
                    equipment=data.get("equipment", "default value"),
                    difficulty=data.get("difficulty", "default value"),
                    instructions=data.get("instructions", "default value")
                )

            # Update the offset value by 10 to get the next set of results
            offset += 10
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



