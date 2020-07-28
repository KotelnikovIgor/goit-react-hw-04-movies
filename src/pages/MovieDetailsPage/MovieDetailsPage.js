import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import * as API from "../../services/api";
import style from "./MovieDetailsPage.module.css";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";

export default class MovieDetailsPage extends Component {
  state = { show: { genres: [] } };

  componentDidMount() {
    const { params } = this.props.match;
    this.searchFindFilm(params.movieId);
  }

  searchFindFilm = (id) => {
    API.searchExactShow(id).then((res) => this.setState({ show: res.data }));
  };

  returnToPrevLoc = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { show } = this.state;
    const { match } = this.props;
    const genres = show.genres.reduce((acc, el) => `${acc}  ${el.name}`, "");
    return (
      <div className={style.wrapper}>
        <button
          className={style.details_button}
          onClick={this.returnToPrevLoc}
          type="button"
        >
          Go back
        </button>
        {show && (
          <div className={style.card}>
            <div className={style.card_image_box}>
              <img
                src={`https://image.tmdb.org/t/p/w400${show.poster_path}`}
                alt=""
              />
              <h2>{show.title}</h2>
            </div>
            <div className={style.card_content_box}>
              <h3>Описание: </h3>
              <p>{show.overview}</p>
              <h3>Оценка пользовател:</h3>
              <p>{show.vote_average * 10} %</p>
              <h3>Жанр:</h3>
              <ul>
                <li>{genres}</li>
              </ul>
            </div>
          </div>
        )}
        <ul>
          <li>
            <Link to={`${match.url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${match.url}/reviews`}>Reviews</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${match.path}/cast`} exact component={Cast} />
          <Route path={`${match.path}/reviews`} exact component={Reviews} />
        </Switch>
      </div>
    );
  }
}
