from django.contrib import admin
from .models import Reviewer, Exercise


@admin.register(Exercise)
class ExerciseAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "exercise_type", "muscle", "equipment", "difficulty", "instructions")
    list_filter = ("exercise_type", "muscle", "difficulty")
    search_fields = ("name", "exercise_type", "muscle", "equipment")
    readonly_fields = ("id",)


@admin.register(Reviewer)
class ReviewerAdmin(admin.ModelAdmin):
    list_display = ("id", "first_name", "last_name", "rating", "comment", "exercise")
    list_filter = ("rating", "exercise")
    search_fields = ("first_name", "last_name", "rating", "comment", "exercise__name")
    readonly_fields = ("id",)
    fieldsets = (
        (None, {
            "fields": ("first_name", "last_name", "rating", "comment", "exercise")
        }),
        ("Advanced options", {
            "classes": ("collapse",),
            "fields": ("id",),
        }),
    )
