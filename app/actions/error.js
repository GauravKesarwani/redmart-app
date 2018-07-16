export const SET_ERROR_FLAG = 'SET_ERROR_FLAG';

export function setErrorFlag(error) {
  return async (dispatch) => {
    dispatch({ type: SET_ERROR_FLAG, error });
  };
}
