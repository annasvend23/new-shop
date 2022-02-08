import {
  SET_USER,
  SET_POPUP_ACTIVE,
  ADD_CART_ITEMS,
  CLEAR_CART_ITEMS,
  FETCH_GOODS_STARTED,
  FETCH_GOODS_SUCCESS,
  FETCH_GOODS_ERROR,
  UPDATE_IN_STOCK_STARTED,
  UPDATE_IN_STOCK_SUCCESS,
  UPDATE_IN_STOCK_ERROR,
  FETCH_GOOD_STARTED,
  FETCH_GOOD_SUCCESS,
  FETCH_GOOD_ERROR,
} from './types';

export function setCurrentUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function setPopupActive(isActive) {
  return {
    type: SET_POPUP_ACTIVE,
    payload: isActive,
  };
}

export function addCartItems(items) {
  return {
    type: ADD_CART_ITEMS,
    payload: items,
  };
}

export function clearCartItems() {
  return {
    type: CLEAR_CART_ITEMS,
  };
}

export const fetchGoodsStarted = () => ({
  type: FETCH_GOODS_STARTED,
});

export const fetchGoodsSuccess = (response) => ({
  type: FETCH_GOODS_SUCCESS,
  payload: response,
});

export const fetchGoodsError = (error) => ({
  type: FETCH_GOODS_ERROR,
  payload: error,
});

export const fetchGoods = () => {
  return (dispatch) => {
    dispatch(fetchGoodsStarted());

    fetch('http://localhost:3000/goods')
      .then((res) => res.json())
      .then((json) => dispatch(fetchGoodsSuccess(json)))
      .catch((error) => dispatch(fetchGoodsError(error)));
  };
};

export const fetchGoodStarted = () => ({
  type: FETCH_GOOD_STARTED,
});

export const fetchGoodSuccess = (response) => ({
  type: FETCH_GOOD_SUCCESS,
  payload: response,
});

export const fetchGoodError = (error) => ({
  type: FETCH_GOOD_ERROR,
  payload: error,
});

export const fetchGood = (id) => {
  return (dispatch) => {
    dispatch(fetchGoodStarted());

    fetch(`http://localhost:3000/goods/${id}`)
      .then((res) => res.json())
      .then((json) => dispatch(fetchGoodSuccess(json)))
      .catch((error) => dispatch(fetchGoodError(error)));
  };
};

export const updateInStockStarted = () => ({
  type: UPDATE_IN_STOCK_STARTED,
});

export const updateInStockSuccess = (response) => ({
  type: UPDATE_IN_STOCK_SUCCESS,
  payload: response,
});

export const updateInStockError = (error) => ({
  type: UPDATE_IN_STOCK_ERROR,
  payload: error,
});

export const updateInStock = (good, value) => {
  return (dispatch) => {
    dispatch(updateInStockStarted());

    fetch(`http://localhost:3000/goods/${good.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inStock: good.inStock - value,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(updateInStockSuccess(json));
        const goodsArr = Array.from({ length: value }).fill(json);
        dispatch(addCartItems(goodsArr));
      })
      .catch((error) => dispatch(updateInStockError(error)));
  };
};
