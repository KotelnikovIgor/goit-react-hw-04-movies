import React, { Component } from "react";
import * as API from "../../services/api";
import style from "./Reviews.module.css";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.searchMoviesReviews(params.movieId);
  }

  searchMoviesReviews = (id) => {
    API.getMovieReviews(id).then((res) =>
      this.setState({ reviews: res.data.results })
    );
  };

  render() {
    const { reviews } = this.state;
    return (
      <ul className={style.reviews_list}>
        {(reviews.length > 0 &&
          reviews.map((el) => (
            <li className={style.reviews_list__item} key={el.id}>
              <p className={style.reviews_text__author}>Author: {el.author}</p>
              <hr />
              <p className={style.reviews_text__content}>{el.content}</p>
            </li>
          ))) || <p>Sorry</p>}
      </ul>
    );
  }
}
