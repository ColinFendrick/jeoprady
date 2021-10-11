import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './containers/PrivateRoute';
import { Main, Login, Signup, Home } from './views';

const App = () => (
  <Main>
    <div>
      Jeoprady!
    </div>

    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/register' exact component={Signup} />
      <PrivateRoute path='/home' exact component={Home} />
    </Switch>
  </Main>
);

export default App;
