import React, { useState } from 'react';
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
import { ThemeProvider } from 'styled-components';
import { light, dark } from './styles/Theme';
import { createContext } from 'react';

export const ThemeToggle = createContext();

function App() {
  const [theme, setTheme] = useState(light);

  const themeChange = () => {
    if (theme.bool === true) {
      return setTheme(dark);
    }

    setTheme(light);
  };

  return (
    <ErrorBoundary FallbackComponent={FatalError}>
      <ThemeProvider theme={theme}>
        <ThemeToggle.Provider value={themeChange}>
          <GlobalStyle />
          <ConnectedRouter history={history}>
            <Switch>
              <Route path="/favorite" component={Favorite} />
              <Route path="/signin" component={Signin} />
              <Route path="/" exact component={Home} />
              <Route component={NotFound} />
            </Switch>
          </ConnectedRouter>
        </ThemeToggle.Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
