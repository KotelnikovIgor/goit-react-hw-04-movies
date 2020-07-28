import axios from "axios";

const key = "2964dee6f9b3937b53e885a7fa2424ff";

export const popularMovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
  );
};

export const searchFilms = (query) => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`
  );
};

export const searchExactShow = (id) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`);
};

export const getMovieCast = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`
  );
};

export const getMovieReviews = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}`
  );
};
