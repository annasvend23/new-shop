import {
  FETCH_GOODS_STARTED,
  FETCH_GOODS_SUCCESS,
  FETCH_GOODS_ERROR,
  UPDATE_IN_STOCK_SUCCESS,
} from './types';

const initialState = {
  loading: false,
  goods: [],
  error: null,
};

export const goodsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GOODS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GOODS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        goods: payload,
      };

    case FETCH_GOODS_ERROR:
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
        goods: state.goods.map((good) => {
          if (good.id === payload.id) {
            return payload;
          }
          return good;
        })
      }

    default:
      return state;
  }
};
