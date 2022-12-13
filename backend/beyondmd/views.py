from django.shortcuts import render
from .models import Reviewer
from .serializers import ReviewerSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser

# Create your views here.
