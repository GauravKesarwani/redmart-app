import data from '../data/products.json';

export const FETCH_FILTERS = 'FETCH_FILTERS';
export const FETCH_FILTERS_SUCCESS = 'FETCH_FILTERS_SUCCESS';
export const FETCH_FILTERS_FAILURE = 'FETCH_FILTERS_FAILURE';

function mockfetchDataCall() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 700);
  });
}

export function fetchFilters() {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_FILTERS });

      const responseData = await mockfetchDataCall();

      if (responseData.error) {
        dispatch({
          type: FETCH_FILTERS_FAILURE,
          error: `error from API: ${responseData.message}`,
        });
      } else {
        dispatch({
          type: FETCH_FILTERS_SUCCESS,
          filters: responseData.filters,
        });
      }
    } catch (e) {
      dispatch({ type: FETCH_FILTERS_FAILURE, error: e });
    }
  };
}
