import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = { inputedText: '' };

  inputHandler = event => {
    this.setState({ inputedText: event.target.value });
  };

  formSubmitHandler = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.inputedText);
    this.setState({ inputedText: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.formSubmitHandler} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchForm__button}>
            <span className={styles['SearchForm__button-label']}>Search</span>
          </button>

          <input
            className={styles.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputedText}
            onChange={this.inputHandler}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
