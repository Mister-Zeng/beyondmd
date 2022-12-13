from django.contrib import admin
from .models import Reviewer, Exercise


# Register your models here.
# admin.site.register(Exercise)
@admin.register(Exercise)
class ExerciseModel(admin.ModelAdmin):
    list_filter = ("exercise_type", "muscle", "difficulty")
    list_display = ("id", "name", "exercise_type", "muscle", "difficulty", "instructions")


admin.site.register(Reviewer)


