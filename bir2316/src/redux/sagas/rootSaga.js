import { takeLatest } from "@redux-saga/core/effects";

import { handleGetFormTwo, handlePostFormTwo, updateFormTwo } from "./handlers/formTwo";
import { GET_FORMTWO, ADD_FORMTWO, UPDATE_FORMTWO } from "../duck/formTwo";

export function* watcherSaga() {
     // get data section
  yield takeLatest(GET_FORMTWO, handleGetFormTwo);

  // ADD
  yield takeLatest(ADD_FORMTWO, handlePostFormTwo);

  //UPDATE
  yield takeLatest(UPDATE_FORMTWO, updateFormTwo);
}