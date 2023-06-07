import {
  FETCH_MAILS_REQUEST,
  FETCH_MAILS_SUCCESS,
  FETCH_MAILS_FAILURE,
} from "../action/actions";
import { SET_FILTER } from "../action/actions";

const initialState = {
  mails: [],
  loading: false,
  error: null,
};

export const mailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_MAILS_SUCCESS:
      return { ...state, loading: false, mails: action.payload };
    case FETCH_MAILS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

//  default mailReducer;

const initialFilter = {
  filter: "inbox",
};

export const rootReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
