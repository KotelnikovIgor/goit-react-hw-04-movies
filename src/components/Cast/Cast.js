import React, { Component } from 'react';
import * as API from '../../services/api';

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.searchMoviesCast(params.movieId);
  }

  searchMoviesCast = id => {
    API.getMovieCast(id).then(res => this.setState({ cast: res.data.cast }));
  };

  render() {
    const { cast } = this.state;
    return (
      <ul>
        {cast.map(el => (
          <li key={el.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
              alt=""
            />
            <p>{el.name}</p>
            <p>{el.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
