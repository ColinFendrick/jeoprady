import { useQuery } from 'react-query';

import CircularProgress from '@material-ui/core/CircularProgress';
import AppService from '../../services/AppService';
import useStyles from './styles';

const Main = ({ children }) => {
  const classes = useStyles();
  const { isError, isLoading, error } = useQuery('healthcheck', AppService.healthcheck);

  return (
    <div className={classes.root}>
      {isLoading ?
        <CircularProgress />
        : isError ?
          error.message
          : children}
    </div>
  );
};

export default Main;
