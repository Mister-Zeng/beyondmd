from django.apps import AppConfig
import sys


class BeyondmdConfig(AppConfig):
    name = 'beyondmd'
    verbose_name = "beyondMD"

    def ready(self):
        if 'runserver' in sys.argv:
            from .cron import save_exercise_from_api
            save_exercise_from_api()
            print("app is ready 1")
