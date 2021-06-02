import styles from './Scroller.module.css';

const Scroller = ({ onClick }) => {
  return (
    <button className={styles['Scroller']} onClick={onClick}>
      Scroller icon
    </button>
  );
};

export default Scroller;
