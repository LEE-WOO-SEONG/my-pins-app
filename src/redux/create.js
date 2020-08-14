import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import reducer from './modules/reducer';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const preLoadedState = {
  auth: {
    token: '',
  },
  // photos: {},
};

export default function create() {
  const store = createStore(
    reducer(history),
    preLoadedState,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  );

  // sagaMiddleware.run(rootSaga)
  return store;
}
