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
При нажатии на кнопку Load more должна 
догружаться следующая порция изображений и 
рендериться вместе с предыдущими. 
После загрузки и рендера новой партии 
изображений страница должна плавно 
скролиться. Для скрола используй следующий 
код.

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
Кнопка должна рендерится только тогда, 
когда есть какие-то загруженные изобаржения. 
Если массив изображений пуст, кнопка не 
рендерится.

*/
