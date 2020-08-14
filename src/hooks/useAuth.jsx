import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

function useAuth() {
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  if (token === null) {
    dispatch(push('/signin'));
  }
}

export default useAuth;
