import styles from './Scroller.module.css';
import PublishIcon from '@material-ui/icons/Publish';

const Scroller = () => {
  const scrollToTop = () => {
    return window.scrollTo({ top: 0 });
  };

  return (
    <button className={styles['Scroller']} onClick={scrollToTop}>
      <PublishIcon style={{ fontSize: 36 }} />
    </button>
  );
};

export default Scroller;
