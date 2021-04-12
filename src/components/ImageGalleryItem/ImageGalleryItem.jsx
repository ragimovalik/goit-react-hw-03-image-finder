import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, lilPicUrl, bigPicUrl, tags }) => {
  return (
    <>
      <img
        className={styles['ImageGalleryItem__image']}
        src={lilPicUrl}
        alt={tags}
        title={tags}
        data={bigPicUrl}
      />
    </>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lilPicUrl: PropTypes.string,
  bigPicUrl: PropTypes.string,
  tags: PropTypes.array,
};

export default ImageGalleryItem;
