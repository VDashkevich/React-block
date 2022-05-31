import { all } from "redux-saga/effects";
import postWatcher from "./postsSaga";
import authWatcher from './authSaga'

export default function* rootSaga() {
  yield all([authWatcher(), postWatcher()]);
}
