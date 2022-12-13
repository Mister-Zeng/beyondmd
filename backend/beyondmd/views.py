from django.core.serializers import serialize
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse, HttpResponse
from rest_framework.parsers import JSONParser

from .models import Exercise, Reviewer
from .serializers import ReviewerSerializer


@require_http_methods(["GET", "POST", "PUT", "DELETE"])
def exercise_view(request):
    if request.method == "GET":
        # retrieve all exercises or a specific exercise if an id is provided
        if request.GET.get("id"):
            exercise = Exercise.objects.get(pk=request.GET.get("id"))
            return JsonResponse({"exercise": exercise})
        else:
            exercises = Exercise.objects.all()
            return JsonResponse({"exercises": exercises})
    elif request.method == "POST":
        # create a new exercise
        name = request.POST.get("name")
        exercise_type = request.POST.get("exercise_type")
        muscle = request.POST.get("muscle")
        difficulty = request.POST.get("difficulty")
        instructions = request.POST.get("instructions")
        exercise = Exercise.objects.create(
            name=name,
            exercise_type=exercise_type,
            muscle=muscle,
            difficulty=difficulty,
            instructions=instructions
        )
        return JsonResponse({"exercise": exercise})
    elif request.method == "PUT":
        # update an existing exercise
        exercise = Exercise.objects.get(pk=request.POST.get("id"))
        exercise.name = request.POST.get("name")
        exercise.exercise_type = request.POST.get("exercise_type")
        exercise.muscle = request.POST.get("muscle")
        exercise.difficulty = request.POST.get("difficulty")
        exercise.instructions = request.POST.get("instructions")
        exercise.save()
        return JsonResponse({"exercise": exercise})
    elif request.method == "DELETE":
        # delete an existing exercise
        exercise = Exercise.objects.get(pk=request.POST.get("id"))
        exercise.delete()
        return JsonResponse({})


@require_http_methods(['GET', 'POST', 'PUT', 'DELETE'])

def reviewer_view(request):
    if request.method == 'GET':
        # retrieve all reviewers
        reviewers = Reviewer.objects.all()
        # serialize reviewers into JSON
        serializer = ReviewerSerializer(reviewers, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ReviewerSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'PUT':
        # retrieve the reviewer to be updated
        reviewer = Reviewer.objects.get(pk=request.POST['id'])
        # update reviewer fields from request data
        reviewer.first_name = request.POST['first_name']
        reviewer.last_name = request.POST['last_name']
        reviewer.rating = request.POST['rating']
        reviewer.comment = request.POST['comment']
        # save the reviewer
        reviewer.save()
        return HttpResponse('Review updated successfully')
    elif request.method == 'DELETE':
        # retrieve the reviewer to be deleted
        reviewer = Reviewer.objects.get(pk=request.POST['id'])
        # delete the reviewer
        reviewer.delete()
        return HttpResponse('Review deleted successfully')
