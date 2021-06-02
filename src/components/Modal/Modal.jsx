import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledCloseBtn from './StyledCloseBtn';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const StyledModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

const Modal = ({ url, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', onClose);

    return () => window.removeEventListener('keydown', onClose);
  }, []); //eslint-disable-line

  return (
    <Overlay onClick={onClose} id="backdrop">
      <StyledModal>
        <img src={url} alt=" " />
      </StyledModal>
      <StyledCloseBtn onClick={onClose} type="button"></StyledCloseBtn>
    </Overlay>
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
