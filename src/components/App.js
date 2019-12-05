import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from '../routes';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Navigation from './Navigation/Navigation';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navigation />
        <hr />
        <Route exact path={routes.HOME} component={HomePage} />
        <Route exact path={routes.MOVIES} component={MoviesPage} />
        <Route path={routes.MOVIES_DETAILS} component={MovieDetailsPage} />
        {/* <Route component={NotFoundPage} />
        <Redirect to="/" /> */}
      </div>
    );
  }
}
