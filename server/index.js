const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Database
let movies = [
  {
    id: 1,
    cover:
      "https://firebasestorage.googleapis.com/v0/b/movie-api-recruitment.appspot.com/o/spider-man-no-way-home_cover.jpg?alt=media",
    date: "2019",
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    duration: "123",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/movie-api-recruitment.appspot.com/o/thumb-spider-man-no-way-home.jpg?alt=media",
    title: "Spider-Man: No Way Home",
    type: "Action",
  },
  {
    id: 2,
    cover:
      "https://firebasestorage.googleapis.com/v0/b/movie-api-recruitment.appspot.com/o/doctor-strange-multiverse-of-madness_cover.jpg?alt=media",
    date: "2022",
    description:
      "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
    duration: "126",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/movie-api-recruitment.appspot.com/o/doctor-strange-multiverse-of-madness.jpg?alt=media",
    title: "Doctor Strange in the Multiverse of Madness",
    type: "Action",
  },
  {
    id: 3,
    cover:
      "https://firebasestorage.googleapis.com/v0/b/movie-api-recruitment.appspot.com/o/avengers-endgame_cover.jpg?alt=media",
    date: "2019",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    duration: "181",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/movie-api-recruitment.appspot.com/o/avengers-endgame.jpg?alt=media",
    title: "Avengers: Endgame",
    type: "Action",
  },
  {
    id: 4,
    cover:
      "https://firebasestorage.googleapis.com/v0/b/movie-api-recruitment.appspot.com/o/joker_cover.jpg?alt=media",
    date: "2019",
    description:
      "The rise of Arthur Fleck, from aspiring stand-up comedian and pariah to Gotham's clown prince and leader of the revolution.",
    duration: "122",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/movie-api-recruitment.appspot.com/o/joker.jpg?alt=media",
    title: "Joker",
    type: "Drama",
  },
  {
    id: 5,
    cover:
      "https://firebasestorage.googleapis.com/v0/b/movie-api-recruitment.appspot.com/o/memento_cover.jpg?alt=media",
    date: "2000",
    description:
      "A man with short-term memory loss attempts to track down his wife's murderer.",
    duration: "114",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/movie-api-recruitment.appspot.com/o/memento.jpg?alt=media",
    title: "Memento",
    type: "Thriller",
  },
];

// GET /movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// POST /movies
app.post("/movies", (req, res) => {
  const newMovie = req.body;
  newMovie.id = movies.length + 1;
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// DELETE /movies/:id
app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  movies = movies.filter((movie) => movie.id !== id);
  res.json({ id });
});

// PUT /movies/:id
app.put("/movies/:id", (req, res) => {
  const { id } = req.params;
  const updatedMovie = req.body;
  movies = movies.map((movie) =>
    movie.id === id ? { ...movie, ...updatedMovie } : movie
  );
  res.json(updatedMovie);
});

// Run the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
