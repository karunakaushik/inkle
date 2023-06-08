import {
  FETCH_MAILS_REQUEST,
  FETCH_MAILS_SUCCESS,
  FETCH_MAILS_FAILURE,
} from "../constant.js";

const initialState = {
  mails: [],
  error: null,
};

export const mailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MAILS_REQUEST:
      return { ...state, error: null };
    case FETCH_MAILS_SUCCESS:
      return { ...state, mails: action.payload };
    case FETCH_MAILS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
