import { Switch, Route } from 'react-router-dom';

import { Home } from './components';

const App = () => (
  <div>
      Basic Setup:
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  </div>
);

export default App;
