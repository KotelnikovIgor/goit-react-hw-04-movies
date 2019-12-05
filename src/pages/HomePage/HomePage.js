import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../services/api';

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { movies } = this.state;
    this.popularSearchMovies(movies);
  }

  popularSearchMovies = () => {
    API.popularMovies().then(res => {
      this.setState({ movies: res.data.results });
    });

    // fetch(
    //   'https://api.themoviedb.org/3/trending/all/day?api_key=2964dee6f9b3937b53e885a7fa2424ff',
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ movies: data.results });
    //   });
  };

  render() {
    const { movies } = this.state;
    return (
      <div>
        <ul>
          {movies.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.title || el.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
