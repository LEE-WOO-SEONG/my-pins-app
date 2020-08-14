import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import photos from './photo';

const reducer = history =>
  combineReducers({
    auth,
    photos,
    router: connectRouter(history),
  });

export default reducer;
