import { all, takeLatest, put, call } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import {
  RegisterUser,
  registerUser,
  setTempMail,
  userActivate,
  loginUser,
  setLogStatus,
  getUserInfo,
  setAuthUserName,
  setIsLoginUserLoading,
} from "../reducers/authReducer";
import {
  registerUserApi,
  userActivateApi,
  loginUserApi,
  getUserInfoApi,
} from "../api/index";

function* registerUserWorker(action: PayloadAction<RegisterUser>) {
  const { callback, email, name, password } = action.payload;

  const { data, status, problem } = yield call(registerUserApi, {
    email,
    username: name,
    password,
  });

  console.log(problem);
  if (status === 201) {
    console.log(data);
    yield put(setTempMail(data.email || ""));
    callback();
  }
}
function* userActivateWorker(action: any) {
  const { uuid, token, callback } = action.payload;
  const { status, data } = yield call(userActivateApi, uuid, token);
  console.log(status);

  if (status === 204) {
    callback();
    console.log(data);
  }
}
function* loginUserWorker(action: any) {
  yield put(setIsLoginUserLoading(true));
  const userData = action.payload;
  const { status, data, problem } = yield call(loginUserApi, userData);
  if (status === 200) {
    localStorage.setItem("jwtAccessToken", data.access);
    localStorage.setItem("jwtRefreshToken", data.refresh);
    yield put(setLogStatus(true));
  } else {
    console.error("ОШИБКА ПРИ ЛОГИНЕ", problem);
  }
  yield put(setIsLoginUserLoading(false));
}
function* getUserInfoWorker(action: any) {
  const accessToken = localStorage.getItem("jwtAccessToken");
  const { status, data, problem } = yield call(getUserInfoApi, accessToken);
  console.log(status);
  if (status === 200) {
    yield put(setAuthUserName(data.username));
  }
  console.log(data.username);
}
export default function* authWatcher() {
  yield all([
    takeLatest(registerUser, registerUserWorker),
    takeLatest(userActivate, userActivateWorker),
    takeLatest(loginUser, loginUserWorker),
    takeLatest(getUserInfo, getUserInfoWorker),
  ]);
}
