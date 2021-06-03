import styled from 'styled-components';
import closeBtn from './closeBtn.svg';

const StyledCloseBtn = styled.button`
  position: absolute;
  top: 2%;
  right: 2%;

  width: 44px;
  height: 44px;
  padding: 0;
  margin: 0;
  /* border: 3px solid #3f51b5; */
  border: none;
  border-radius: 50%;
  outline: none;

  background-color: #e0e8e5;
  background-image: url(${closeBtn});
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;

  opacity: 0.5;
  cursor: pointer;
  transition: opacity 250ms linear;

  &:hover,
  &:focus {
    opacity: 1;
    transform: scale(1.03);
  }
`;

export default StyledCloseBtn;
