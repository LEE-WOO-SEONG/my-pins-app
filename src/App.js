import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Signin from './pages/Signin';
import Favorite from './pages/Favorite';
import NotFound from './pages/NotFound';
import FatalError from './pages/FatalError';
import { history } from './redux/create';

// styles
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <ErrorBoundary FallbackComponent={FatalError}>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/favorite" component={Favorite} />
          <Route path="/signin" component={Signin} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
