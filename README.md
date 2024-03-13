
# Fullstack app test

This project is a technical assessment for the Fullstack Developer position. It includes both frontend and backend projects.

## Overview
The application allows users to view a list of movies with details such as cover image, title, release date, duration, and description. Users can navigate between a list view and a detailed view of each movie.


## Usage

- Navigate to the homepage to view the list of movies.
- Click on a movie card to view its details.
- Use the back button to return to the list view.
## Technologies Used

Frontend : 
- React js
- React Router DOM
- React Icons
- Slick Carousel

Backend : 
- Node.js
- Express.js



## Installation and Setup

## Frontend 

To run tests, run the following command
1. Clone the repository to your local machine : 
```bash
git clone https://github.com/cybop/fullstack-app-test.git
```

2. Navigate to the project directory:
```bash
cd fullstack-app-test
```

3. Install dependencies:
```bash
npm install
```

4. Start the frontend development server:
```bash
npm start
```

5. Open your browser and go to http://localhost:3000 to view the application.




## Backend
## API Reference

#### Get all the movies

```http
  GET /movies/
```


#### Post a new movie

```http
  POST /movies/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `cover` | `string` | **Required**. Link to the movie cover |
| `date` | `string` | **Required**. Year of creation of the movie |
| `description` | `string` | **Required**. Description of the movie |
| `duration` | `string` | **Required**. Duration of the movie (minutes) |
| `thumbnail` | `string` | **Required**. Link to the movie thumbnail |
| `title` | `string` | **Required**. Title of the movie |
| `type` | `string` | **Required**. Type of the movie |



#### Delete a movie

```http
  DELETE /movies/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. ID of the movie |

#### Modify data of a movie

```http
  PUT /movies/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
| `cover` | `string` | Link to the movie cover |
| `date` | `string` | Year of creation of the movie |
| `description` | `string` | Description of the movie |
| `duration` | `string` | Duration of the movie (minutes) |
| `thumbnail` | `string` | Link to the movie thumbnail |
| `title` | `string` | Title of the movie |
| `type` | `string` | Type of the movie |



## CURL Requests for Fullstack App Test

### GET Movies

Retrieve the complete list of movies from the backend.

```bash
curl https://fullstack-app-test.onrender.com/movies
```

### Post a movie

Add a new movie to the database.

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title":"New Movie","description":"Description of the new movie","date":"2023","duration":"120","type":"Action","cover":"https://example.com/cover.jpg","thumbnail":"https://example.com/thumbnail.jpg"}' https://fullstack-app-test.onrender.com/movies
```

### DELETE Movie

Delete a movie from the database by its ID.

```bash
curl -X DELETE https://fullstack-app-test.onrender.com/movies/1
```

### PUT Movie

Update an existing movie in the database by its ID.

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"title":"Updated Title","description":"Updated description","date":"2023","duration":"130","type":"Drama","cover":"https://example.com/updated-cover.jpg","thumbnail":"https://example.com/updated-thumbnail.jpg"}' https://fullstack-app-test.onrender.com/movies/2
```



You can use these CURL commands to interact with the Fullstack App Test deployed on Render. Adjust the data and endpoints as needed for your specific use case.





