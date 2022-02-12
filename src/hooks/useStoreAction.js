import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default function useStoreAction(action) {
  const dispatch = useDispatch();
  const dispatchAction = useCallback(
    (...args) => dispatch(action(...args)),
    [dispatch, action],
  );
  return dispatchAction;
}
