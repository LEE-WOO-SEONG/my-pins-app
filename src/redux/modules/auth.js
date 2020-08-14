import { handleActions } from 'redux-actions';

const prefix = {
  prefix: 'my-pins-app/photo',
};

const initialState = {};

const authReducer = handleActions({}, initialState, prefix);

export default authReducer;
