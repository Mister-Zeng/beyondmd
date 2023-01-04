from .models import Exercise
from django.core.cache import cache
import logging
import requests
import os
from dotenv import load_dotenv
from django.http import HttpResponse

# Load the API key from an environment variable
load_dotenv()
api_key = os.environ.get('API_KEY')


# Method that fetches exercises from an external API and saves them to the database.
# It loops through a list of exercise types and sends a GET request to the API with each type as a parameter.
# It then processes the response and checks if the exercise data already exists in the database.
# If it doesn't, it creates a new exercise record in the database. After all the data has been processed,
# It then clears the cache to reflect the updated list of exercises and returns a success message to the user.
def save_exercise_from_api():
    exercise_type = ['cardio', 'olympic_weightlifting', 'plyometrics', 'powerlifting', 'strength', 'stretching',
                     'strongman']

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
                Exercise.objects.get_or_create(
                    name=data.get("name"),
                    exercise_type=data.get("type"),
                    muscle=data.get("muscle"),
                    equipment=data.get("equipment"),
                    difficulty=data.get("difficulty"),
                    instructions=data.get("instructions")
                )

            # Update the offset value by 10 to get the next set of results
            offset += 10

    # Clear the cache to reflect the updated list of exercises
    cache.delete('exercises')
    # Display a success message to the user
    return logging.info("Exercises fetched successfully")
