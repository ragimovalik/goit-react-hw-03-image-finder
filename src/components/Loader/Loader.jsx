import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSpinnerBox = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 60px;
  height: 60px;
  text-align: center;
  top: 0;
`;

const Spinner = ({ visible }) => {
  return (
    <StyledSpinnerBox>
      <Loader
        type="ThreeDots"
        color="#303F9F"
        height={60}
        width={60}
        timeout={5000}
        visible={visible}
      />
    </StyledSpinnerBox>
  );
};

Spinner.defaultProps = {
  visible: true,
};

Spinner.propTypes = {
  visible: PropTypes.bool,
};

export default Spinner;
