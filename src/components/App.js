import React, { Component } from "react";
import { Route } from "react-router-dom";
import routes from "../routes";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import Navigation from "./Navigation/Navigation";
import style from "./App.module.css";

export default class App extends Component {
  render() {
    return (
      <>
        <header>
          <Navigation />
        </header>
        <main>
          <Route exact path={routes.HOME} component={HomePage} />
          <Route exact path={routes.MOVIES} component={MoviesPage} />
          <Route path={routes.MOVIES_DETAILS} component={MovieDetailsPage} />
        </main>
      </>
    );
  }
}
