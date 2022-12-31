from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from .models import Exercise
from .serializers import ReviewerSerializer, ExerciseSerializer
from django.core.cache import cache


# GET request that retrieves all exercises from the database. It first checks if the
# exercises are cached, which means they have been stored in memory for quick access. If the exercises are not
# cached, it fetches them from the database, caches them for future requests, and serializes them (converts them to
# JSON). Finally, it returns the serialized data as a JSON response.
@csrf_exempt
@require_http_methods(["GET"])
def get_exercises(request):
    try:
        # Check if the exercises are cached
        exercises = cache.get('exercises')
        if not exercises:
            # If not, fetch the exercises from the database
            exercises = Exercise.objects.all()
            # Cache the exercises for future requests
            cache.set('exercises', exercises)
        # Serialize the exercises
        serializer = ExerciseSerializer(exercises, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)
    except Exercise.DoesNotExist:
        # Return a 404 Not Found status code if the requested exercise does not exist
        return JsonResponse(serializer.errors, status=400)


# GET request that retrieves all reviewers for a particular exercise from the database and
# serializes them into JSON. It takes an exercise_id parameter and calls the get_reviewers_from_exercise method of
# the ReviewerSerializer class to get the reviewers. It returns the serialized data as a JSON response.
@csrf_exempt
@require_http_methods(['GET'])
def exercise_reviews(request, exercise_id):
    try:
        reviewers = ReviewerSerializer.get_reviewers_from_exercise(exercise_id=exercise_id)
        serializer = ReviewerSerializer(reviewers, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)
    except Exercise.DoesNotExist:
        # Return a 404 Not Found status code if the requested exercise does not exist
        return JsonResponse(serializer.errors, status=400)


#  POST request that saves a new review to the database.
#  It parses the request data as JSON and passes it to the ReviewerSerializer class to create a new reviewer instance.
#  If the serializer is valid, it saves the review to the database and returns a success message to the user.
#  If the serializer is invalid, it returns an error message to the user.
@csrf_exempt
@require_http_methods(['POST'])
def submit_review(request):
    data = JSONParser().parse(request)
    serializer = ReviewerSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=201)
    return JsonResponse(serializer.errors, status=400)

