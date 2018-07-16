import * as ActionTypes from '../actions/filters';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_FILTERS_SUCCESS:
      return action.filters;
    default:
      return state;
  }
}
