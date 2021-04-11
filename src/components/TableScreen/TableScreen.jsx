import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Screen__box: {
    display: 'block',
    margin: '0 auto',
    padding: '5px 10px',

    fontSize: '1.2rem',
    fontWeight: 500,
    color: '#3f51b5',
  },
});

const TableScreen = ({ message }) => {
  const classes = useStyles();

  return <p className={classes.Screen__box}>{message}</p>;
};

TableScreen.defaultProps = {
  message: ':)',
};

TableScreen.propTypes = {
  message: PropTypes.string,
};

export default TableScreen;
