import { SET_POPUP_ACTIVE } from "./types";

const initialState = {
  isActive: false,
}

export const popupReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_POPUP_ACTIVE: {
      return {
        ...state,
        isActive: payload,
      }
    }
    default: return state;
  }
}
