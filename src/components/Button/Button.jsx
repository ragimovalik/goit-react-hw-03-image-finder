import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  width: 180px;
  height: 40px;
  padding: 5px;
  margin: 0 auto;

  border: 3px solid lightgray;
  border-radius: 8px;
  outline: none;

  background-color: #3f51b5;
  color: #ffffff;
  font-family: inherit;
  font-size: 1.15rem;
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  line-height: 1.33;

  overflow: hidden;
  cursor: pointer;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
    background-color: #303f9f;
  }
`;

const Button = ({ btnText, onClick }) => (
  <StyledButton onClick={onClick}>{btnText}</StyledButton>
);

Button.defaultProps = {
  btnText: 'click me',
  onClick: () => null,
};

Button.propTypes = {
  btnText: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
