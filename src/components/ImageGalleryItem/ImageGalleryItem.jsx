import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledListItem = styled.li`
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

const ImageGalleryItem = ({ id, lilPicUrl, bigPicUrl, tags, onClick }) => {
  return (
    <StyledListItem key={id} onClick={() => onClick(bigPicUrl)}>
      <StyledImage src={lilPicUrl} alt={tags} title={tags} data={bigPicUrl} />
    </StyledListItem>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lilPicUrl: PropTypes.string,
  bigPicUrl: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
