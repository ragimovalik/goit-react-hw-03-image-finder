//import PropTypes from 'prop-types';
import styles from './Button.module.css';

console.log(styles);

const Button = () => {
  return <button className={styles.Button}>click me</button>;
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

/*

const Button = ({ btnText, onLeaveFeedback }) => (
  <button
    onClick={onLeaveFeedback}
  >
    {btnText}
  </button>
);

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
};

*/
