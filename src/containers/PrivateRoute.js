import {
  Route,
  Redirect
} from 'react-router-dom';

import useAppContext from '../hooks/useAppContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { appState } = useAppContext();

  return <Route
    {...rest}
    render={props =>
      appState.user?.accessToken
        ? <Component {...props} />
        : <Redirect to='/' />}
  />;
};

export default PrivateRoute;
