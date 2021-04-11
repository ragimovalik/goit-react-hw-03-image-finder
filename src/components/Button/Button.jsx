import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ btnText, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {btnText}
    </button>
  );
};

Button.defaultProps = {
  btnText: 'click me',
  onClick: () => null,
};

Button.propTypes = {
  btnText: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

/*
window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
*/
