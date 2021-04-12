import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ url, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', onClose);

    return () => window.removeEventListener('keydown', onClose);
  }, []);

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

Modal.defaultProps = {
  url:
    'https://pixabay.com/get/g2eef296fd61c640231dd5a2882f825f73bbd55e2840b18d7f5b56b6e4e478815062ddc2c65376c107b005b8204f0cc75e3c998849527c91589c6d9ed0e64405d_1280.jpg',
};

Modal.propTypes = {
  url: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
