import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  state = {
    value: '',
  };

  handelChange = e => {
    this.setState({ value: e.target.value });
  };

  handelSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handelSubmit}>
        <input onChange={this.handelChange} value={value} type="text" />
        <button type="submit">Search</button>
      </form>
    );
  }
}
