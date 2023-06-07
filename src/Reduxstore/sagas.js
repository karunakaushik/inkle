import { put, takeEvery } from "redux-saga/effects";
import {
  FETCH_MAILS_REQUEST,
  fetchMailsSuccess,
  fetchMailsFailure,
} from "./actions";
// import axios from 'axios';

function* fetchMails() {
  try {
    const response = yield fetch(
      "https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123"
    );
    yield put(fetchMailsSuccess(response.data));
  } catch (error) {
    yield put(fetchMailsFailure(error.message));
  }
}

function* mailSaga() {
  yield takeEvery(FETCH_MAILS_REQUEST, fetchMails);
}

export default mailSaga;
