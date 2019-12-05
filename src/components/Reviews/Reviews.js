import React, { Component } from 'react';
import * as API from '../../services/api';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.searchMoviesReviews(params.movieId);
  }

  searchMoviesReviews = id => {
    API.getMovieReviews(id).then(res =>
      this.setState({ reviews: res.data.results }),
    );
  };

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {(reviews.length > 0 &&
          reviews.map(el => (
            <li key={el.id}>
              <p>Author:{el.author}</p>
              <p>{el.content}</p>
            </li>
          ))) || <p>Sorry</p>}
      </ul>
    );
  }
}
