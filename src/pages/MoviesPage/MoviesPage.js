import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import * as API from "../../services/api";
import style from "./MoviesPage.module.css";

export default class MoviesPage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const currentSearch = new URLSearchParams(location.search).get("search");
    if (!currentSearch) {
      return;
    }
    this.fetchFilms(currentSearch);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = new URLSearchParams(prevProps.location.search).get(
      "search"
    );
    const { location } = this.props;
    const currentSearch = new URLSearchParams(location.search).get("search");
    console.log("prevSearch :", prevSearch);
    console.log("currentSearch :", currentSearch);

    if (prevSearch && prevSearch === currentSearch) {
      return;
    }

    this.fetchFilms(currentSearch);
  }

  fetchFilms = (query) => {
    API.searchFilms(query).then((res) =>
      this.setState({ films: res.data.results })
    );
  };

  onSearchSubmit = (query) => {
    const { history, location } = this.props;

    history.push({ ...location, search: `?search=${query}` });
  };

  render() {
    const { films } = this.state;
    console.log(films);
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* <ul>
          {films.map((el) => (
            <li key={el.id}>
              <NavLink to={`/movies/${el.id}`}>{el.title || el.name}</NavLink>
            </li>
          ))}
        </ul> */}
        <div className={style.wrapper}>
          <ul className={style.movies_list}>
            {films.map((el) => (
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
      </div>
    );
  }
}
