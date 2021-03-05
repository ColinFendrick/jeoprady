import { useEffect } from 'react';

import AppService from '../../services/AppService';
import useStyles from './styles';

const Main = ({ children }) => {
  const classes = useStyles();

  useEffect(() => {
    AppService.get();
  }, []);

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default Main;
