<a name="readme-top"></a>

# SweatCritique

A web app that fetch a list of exercises from API Ninja, a 3rd party API, and save it to the database if it does not exist. This app allows users to view, filter, and search a list of exercises, and add reviews on the selected exercise.


## Table of contents

- [Overview](#overview)
    - [Features](#features)
    - [Demo](#demo)
- [Installation](#installation)
    - [Built with](#built-with)
    - [Deployment](#deployment)
    - [License](#license)
- [Author](#author)


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
4. On the front end, install NPM packages
   ```sh
   npm install
   ```
5. In the root directory on the front end, create a file called `.env` and add your API Key from Unsplash
   ```js
   REACT_APP_UNSPLASH_ACCESS_KEY = 'ENTER YOUR API';
   ```
6. On the back end root directory, create a file called `.env` and add your API Key from API Ninja
    ```bash 
   ````
    ```js
    API_KEY = 'ENTER YOUR API';
   ```
7. Download and install [Docker](https://www.docker.com/)
8. In the terminal of the root project folder, run this command
    ```sh
   docker-compose build
   ```
     ```sh
   docker-compose up
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