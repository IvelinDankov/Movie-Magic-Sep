import Movie from "../model/Movie.js";
import  Cast  from "../model/Cast.js";

const getAll = async (filter = {}) => {
  let movies = await Movie.find().lean();

  if (filter.search) {
    movies = movies.filter(movie =>
      movie.title.toLowerCase().includes(filter.search.toLowerCase())
    );
  }

  if (filter.genre) {
    movies = movies.filter(
      movie => movie.genre.toLowerCase() === filter.genre.toLowerCase()
    );
  }

  if (filter.year) {
    movies = movies.find({ year, filter: year });
  }

  return movies;
};
const create = movie => Movie.create(movie);

const getOne = movieId => Movie.findById(movieId);



export default {
  getAll,
  create,
  getOne
};
