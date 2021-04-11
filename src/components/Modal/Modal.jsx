import styles from './Modal.module.css';

const Modal = ({ url, onClose }) => {
  return (
    <div onClick={onClose} id="backdrop" className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={url} alt=" " />
      </div>
      <button
        onClick={onClose}
        type="button"
        className={styles.CloseBtn}
      ></button>
    </div>
  );
};

export default Modal;

/*
        <button
          type="button"
          class="lightbox__button"
          data-action="close-lightbox"
        ></button>
*/

/*
При клике по элементу галереи должно открываться модальное окно с 
темным оверлеем и отображаться большая версия изображения. 
Модальное окно должно закрываться по нажатию клавиши ESC или по 
клику на оверлее.

Внешний вид похож на функционал этого VanillaJS-плагина, 
только вместо белого модального окна рендерится изображение 
(в примере нажми Run). Анимацию делать не нужно!

*/
