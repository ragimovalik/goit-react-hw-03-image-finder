import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin: 0 auto;
`;

const ImageGallery = ({ collection, onClick }) => {
  return (
    <StyledGallery>
      {collection.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          onClick={() => onClick(picture.bigPicUrl)}
          id={picture.id}
          lilPicUrl={picture.lilPicUrl}
          bigPicUrl={picture.bigPicUrl}
          tags={picture.tags}
        />
      ))}
    </StyledGallery>
  );
};

ImageGallery.defaultProps = {
  collection: [
    {
      id: 3295891,
      lilPicUrl:
        'https://pixabay.com/get/gb770f66d952c702d775af8030f534a313d6d926a64b10a982e3370d96f644aac37d1b4936df2e44f505663e64e1bc4effccf8b758c6344b2dae4ace19f28e4c6_640.jpg',
      bigPicUrl:
        'https://pixabay.com/get/g2eef296fd61c640231dd5a2882f825f73bbd55e2840b18d7f5b56b6e4e478815062ddc2c65376c107b005b8204f0cc75e3c998849527c91589c6d9ed0e64405d_1280.jpg',
      tags: 'maki, curious, halfaap',
    },
  ],
};

ImageGallery.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

export default ImageGallery;
