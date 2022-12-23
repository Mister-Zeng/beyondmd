# This Dockerfile uses the python:3 image as the base image and installs the necessary dependencies for the app using pip.
# It then copies the source code and static assets into the image and exposes port 8000,
#which is the default port used by Django's development server.
#Finally, it specifies the python manage.py runserver 0.0.0.0:8000 command to run when the container is started.

FROM python:3.9

ENV PYTHONUNBUFFERED=1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY requirements.txt ./
RUN pip install -r requirements.txt

# Bundle app source
COPY . .

#EXPOSE 8000
#CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]