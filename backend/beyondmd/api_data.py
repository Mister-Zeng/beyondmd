# import os
# import requests
# from .models import Exercise
#
#
# def save_data_from_api():
#     api_key = os.environ['API_KEY']
#     exercise_type = ['cardio', 'olympic_weightlifting', 'plyometrics', 'powerlifting', 'strength', 'stretching',
#                      'strongman']
#
#     for exercise in exercise_type:
#         offset = 0
#         while True:
#             response = requests.get('https://api.api-ninjas.com/v1/exercises',
#                                     headers={'X-Api-Key': api_key},
#                                     params={'type': exercise, 'offset': offset})
#             data = response.json()
#
#             if not data:
#                 # No more data, break out of the loop
#                 break
#
#             for item in data:
#                 # Check if the data already exists in the database
#                 exercise, created = Exercise.objects.get_or_create(
#                     name=item.name,
#                     exercise_type=item.type,
#                     muscle=item.muscle,
#                     difficulty=item.difficulty,
#                     instructions=item.instructions
#                 )
#
#                 # If the object was created, save it to the database
#                 if created:
#                     exercise.save()
#
#             # Update the offset value by 10 to get the next set of results
#             offset += 10
