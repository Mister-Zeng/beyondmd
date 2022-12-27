FROM python:3.9-slim

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# Install PostgreSQL development headers and build tools
RUN apt-get update && apt-get install -y libpq-dev build-essential

WORKDIR /app

# Upgrade pip
RUN python -m pip install --upgrade pip

COPY backend/requirements.txt .

# Install required packages
RUN pip install -r requirements.txt

COPY backend .

ENTRYPOINT ["bash", "-c", "python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]