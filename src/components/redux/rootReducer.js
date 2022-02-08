import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { popupReducer } from './popupReducer';
import { cartReducer } from './cartReducer';
import { goodsReducer } from './goodsReducer';
import { goodReducer } from './goodReducer';

export const rootReducer = combineReducers({
  userReducer,
  popupReducer,
  cartReducer,
  goodsReducer,
  goodReducer,
});
