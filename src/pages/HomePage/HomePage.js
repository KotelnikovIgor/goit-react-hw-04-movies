import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as API from "../../services/api";
import style from "./HomePage.module.css";

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { movies } = this.state;
    this.popularSearchMovies(movies);
  }

  popularSearchMovies = () => {
    API.popularMovies().then((res) => {
      this.setState({ movies: res.data.results });
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={style.wrapper}>
        <ul className={style.movies_list}>
          {movies.map((el) => (
            <NavLink
              className={style.movies_list__link}
              to={`/movies/${el.id}`}
            >
              <li className={style.movies_list__item} key={el.id}>
                <img
                  className={style.movies_list__image}
                  src={`https://image.tmdb.org/t/p/w200${el.poster_path}`}
                  alt=""
                />
                <p>{el.title || el.name}</p>
                <p>Рейтинг: {el.vote_average}</p>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    );
  }
}
