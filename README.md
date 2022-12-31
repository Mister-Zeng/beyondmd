<a name="readme-top"></a>

# SweatCritique

A web app that fetch a list of exercises from API Ninja, a 3rd party API, and save it to the database if it does not exist. This app allows users to view, filter, and search a list of exercises, and add reviews on the selected exercise.


## Table of contents

- [Overview](#overview)
  - [Features](#features)
  - [Demo](#demo)
- [Cron](#feature--scheduled-tasks) 
  - [Configuration](#cronjob-configuration)
- [Installation](#installationrunning-on-docker)
- [Built with](#built-with)
  - [Deployment](#deployment)
- [Author](#author)
- [License](#license)


## Overview

## Features

- View a list of different exercises
- Filter exercises by muscle part, type of exercise, and difficulty level
- Search exercises by name
- Add reviews on the exercise selected, consisting of reviewer's name, rating from 1 to 5 stars and a comment


## Demo

Click on the thumbnail to watch the demo video:

[![Demo Video](https://img.youtube.com/vi/U1g9HVUuSOo/maxresdefault.jpg)](https://youtu.be/U1g9HVUuSOo)


## Installation/Running on Docker

1. Get a free API Key from [API Ninjas](https://api-ninjas.com/api)
2. Get a free API Key from [Unsplash](https://unsplash.com/)
3. Clone the repo
   ```sh
   git clone https://github.com/Mister-Zeng/sweatcritique.git
   ```
4. In the root directory on the front end, create a file called `.env` and add your API Key from Unsplash
   ```js
   REACT_APP_UNSPLASH_ACCESS_KEY = 'ENTER YOUR API';
   ```
5. In the back end root directory, create a file called `.env` and add your API Key from API Ninja
    ```js
    API_KEY = 'ENTER YOUR API';
   ```
6. Download and install [Docker](https://www.docker.com/)
7. In the terminal of the root project folder, run this command
    ```sh
   docker-compose build
   ```
     ```sh
   docker-compose up
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Feature: Scheduled Tasks

### Cron
In this project, I am utilizing cron to schedule the save_exercise_from_api method, 
which fetches data from a third-party API and saves it to the database. 
This method is scheduled to run upon server start and at 12:01am daily to consistently 
update the database with any new data from the API.

### Cronjob Configuration
The tasks to be run on a schedule or on reboot are configured in the settings.py file.

The following example shows how to schedule a task called save_exercise_from_api to run at 
1 minute past midnight every day and on system reboot:

```python
CRONJOBS = [
    ('1 0 * * *', 'beyondmd.cron.save_exercise_from_api'),
    ('@reboot', 'beyondmd.cron.save_exercise_from_api')
]
```

The syntax for specifying the schedule in a cron job is as follows:

```
 ┌───────────── minute (0 - 59)
 │ ┌───────────── hour (0 - 23)
 │ │ ┌───────────── day of the month (1 - 31)
 │ │ │ ┌───────────── month (1 - 12)
 │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday;
 │ │ │ │ │                                   7 is also Sunday on some systems)
 │ │ │ │ │
 │ │ │ │ │
 * * * * * <command to execute>
```

### Running Cron
Inside the `Docker File` on the backend, these commands are executed after migration and right before running the server. 
```sh 
python manage.py crontab add && service cron start
```

This command add all the defined jobs from CRONJOBS to crontab
```shell
python manage.py crontab add
```

This command will start cron service and will execute all the defined scheduled jobs
```shell
service cron start
```
## Built with

- React
- TypeScript
- Python
- Django
- PostgreSQL

## Deployment

- Docker

## Author

- Email - [Jason Zeng](mailto:officialjasonzeng@gmail.com?subject=[GitHub]%20SweatCritique%20App)
- Website - [Jason Zeng](https://jasonz.dev/)
- Twitter - [Misterzeng](https://www.twitter.com/misterzeng)

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>