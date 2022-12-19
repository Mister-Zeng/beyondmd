from django.apps import AppConfig

# from .api_data import save_data_from_api


class BeyondmdConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'beyondmd'

    # def ready(self):
    #     save_data_from_api()