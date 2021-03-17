import { Switch, Route } from 'react-router-dom';

import { Home } from './components';
import { Main, Login, Signup } from './views';

const App = () => (
  <Main>
    <div>
      Jeoprady!
    </div>

    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/register' exact component={Signup} />
      <Route path='/main' exact component={Home} />
    </Switch>
  </Main>
);

export default App;
