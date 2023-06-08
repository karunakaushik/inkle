import {
  FETCH_MAILS_REQUEST,
  FETCH_MAILS_SUCCESS,
  FETCH_MAILS_FAILURE,
} from "../constant.js";

export const fetchMailsRequest = () => ({
  type: FETCH_MAILS_REQUEST,
});

export const fetchMailsSuccess = (mails) => ({
  type: FETCH_MAILS_SUCCESS,
  payload: mails,
});

export const fetchMailsFailure = (error) => ({
  type: FETCH_MAILS_FAILURE,
  payload: error,
});

export const fetchMails = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123"
      );
      const data = await response.json();
      dispatch(fetchMailsSuccess(data));
    } catch (error) {
      dispatch(fetchMailsFailure(error.message));
    }
  };
};
