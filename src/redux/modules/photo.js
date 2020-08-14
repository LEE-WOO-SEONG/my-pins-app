import { handleActions } from 'redux-actions';

const prefix = {
  prefix: 'my-pins-app/photo',
};

const initialState = {};

const photoReducer = handleActions({}, initialState, prefix);

export default photoReducer;
