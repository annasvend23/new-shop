import {
  FETCH_GOOD_STARTED,
  FETCH_GOOD_SUCCESS,
  FETCH_GOOD_ERROR,
  UPDATE_IN_STOCK_SUCCESS,
} from './types';

const initialState = {
  loading: false,
  good: [],
  error: null,
};

export const goodReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GOOD_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        good: payload,
      };

    case FETCH_GOOD_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case UPDATE_IN_STOCK_SUCCESS: 
      return {
        ...state,
        loading: false,
        error: null,
        good: payload,
      }

    default:
      return state;
  }
};
