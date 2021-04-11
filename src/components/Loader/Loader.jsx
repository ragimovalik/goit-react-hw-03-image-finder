import Loader from 'react-loader-spinner';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  Spinner__box: {
    position: 'relative',
    display: 'block',
    margin: '0 auto',
    width: 60,
    height: 60,
    textAlign: 'center',
    top: '0',
  },
  //   Spinner: {
  //     position: 'absolute',
  //   },
});

const Spinner = ({ visible }) => {
  const classes = useStyles();

  return (
    <div className={classes.Spinner__box}>
      <Loader
        // className={classes.Spinner}
        type="ThreeDots"
        color="#303F9F"
        height={60}
        width={60}
        timeout={5000}
        visible={visible}
      />
    </div>
  );
};

Spinner.defaultProps = {
  visible: true,
};

Spinner.propTypes = {
  visible: PropTypes.bool,
};

export default Spinner;
