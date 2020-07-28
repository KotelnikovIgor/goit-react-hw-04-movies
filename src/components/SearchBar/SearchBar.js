import React, { Component } from "react";
import style from "./SearchBar.module.css";

export default class SearchBar extends Component {
  state = {
    value: "",
  };

  handelChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handelSubmit = (e) => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={style.wrapper}>
        <form className={style.form_search} onSubmit={this.handelSubmit}>
          <input
            placeholder="Search movies"
            size="30"
            className={style.form_search__input}
            onChange={this.handelChange}
            value={value}
            type="text"
          />
          <button className={style.form_search__button} type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
