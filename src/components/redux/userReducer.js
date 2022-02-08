import { SET_USER } from "./types";

const initialState = {
  currentUser: null,
}

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_USER: {
      return {
        ...state,
        currentUser: payload,
      }
    }
    default: return state;
  }
}
