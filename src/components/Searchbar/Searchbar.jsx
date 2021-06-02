import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledSearchbar,
  StyledButton,
  StyledForm,
  StyledSpan,
  StyledInput,
} from './SearchbarStyles';

const Searchbar = ({ onSubmit }) => {
  const [inputedText, setInputedText] = useState('');

  const inputHandler = ({ target }) => {
    setInputedText(target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    onSubmit(inputedText);

    setInputedText('');
  };

  return (
    <StyledSearchbar>
      <StyledForm onSubmit={formSubmitHandler}>
        <StyledButton type="submit">
          <StyledSpan>Search</StyledSpan>
        </StyledButton>

        <StyledInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputedText}
          onChange={inputHandler}
        />
      </StyledForm>
    </StyledSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;

/*
// =============== Class Component ===============

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
*/
