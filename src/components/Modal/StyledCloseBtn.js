import styled from 'styled-components';

const StyledCloseBtn = styled.button`
  position: absolute;
  top: 2%;
  right: 4%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  transition: background-color 250ms linear;
  outline: none;
  background-image: url('./closeBtn.svg');
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export default StyledCloseBtn;
