import React, { Component } from "react";
import * as API from "../../services/api";
import style from "./Cast.module.css";
import defaultImage from "../../assets/image/avatarDefault.png";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.searchMoviesCast(params.movieId);
  }

  searchMoviesCast = (id) => {
    API.getMovieCast(id).then((res) => this.setState({ cast: res.data.cast }));
  };

  render() {
    const { cast } = this.state;
    return (
      <ul className={style.cast_list}>
        {cast.map((el) => (
          <li className={style.cast_list__item} key={el.cast_id}>
            <img
              className={style}
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w200${el.profile_path}`
                  : defaultImage
              }
              alt=""
              width="200px"
              height="300px"
            />
            <p>{el.name}</p>
          </li>
        ))}
      </ul>
    );
  }
}
