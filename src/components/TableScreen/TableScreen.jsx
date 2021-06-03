import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMessage = styled.p`
  display: block;
  margin: 0 auto;
  padding: 5px 10px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #3f51b5;
`;

const TableScreen = ({ message }) => <StyledMessage>{message}</StyledMessage>;

TableScreen.defaultProps = {
  message: ':)',
};

TableScreen.propTypes = {
  message: PropTypes.string,
};

export default TableScreen;
