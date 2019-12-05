import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as API from '../../services/api';

export default class MoviesPage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const currentSearch = new URLSearchParams(location.search).get('search');
    if (!currentSearch) {
      return;
    }
    this.fetchFilms(currentSearch);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = new URLSearchParams(prevProps.location.search).get(
      'search',
    );
    const { location } = this.props;
    const currentSearch = new URLSearchParams(location.search).get('search');
    console.log('prevSearch :', prevSearch);
    console.log('currentSearch :', currentSearch);

    if (prevSearch && prevSearch === currentSearch) {
      return;
    }

    this.fetchFilms(currentSearch);
  }

  fetchFilms = query => {
    API.searchFilms(query).then(res =>
      this.setState({ films: res.data.results }),
    );
  };

  onSearchSubmit = query => {
    const { history, location } = this.props;

    history.push({ ...location, search: `?search=${query}` });
  };

  render() {
    const { films } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ul>
          {films.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.title || el.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
