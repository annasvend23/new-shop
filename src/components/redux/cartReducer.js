import { ADD_CART_ITEMS, CLEAR_CART_ITEMS } from './types';

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART_ITEMS:
      return {
        ...state,
        cartItems: [...state.cartItems, ...payload],
      };
    case CLEAR_CART_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
