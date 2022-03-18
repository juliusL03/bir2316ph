import { call, put } from "@redux-saga/core/effects";
import { setFormTwo } from "../../duck/formTwo";
import { requestGetFormTwo, addPostFormTwo, editFormTwo } from "../requests/formTwo";

export function* handleGetFormTwo(action) {
    try {
        const response = yield call(requestGetFormTwo);
        const { data } = response;
        yield put(setFormTwo(data));
    } catch (error) {
        console.log(error);
    }
}

export function* handlePostFormTwo(action) {
    try {
        const { data } = action;
        yield call(addPostFormTwo, data);
        const response = yield call(requestGetFormTwo);
        yield put(setFormTwo(response.data));
    } catch (error) {
        console.log(error);
    }
}

export function* updateFormTwo(action){
    try {
      const { data } = action;
      yield call(editFormTwo, data);
      const response = yield call(requestGetFormTwo);
        yield put(setFormTwo(response.data));
    } catch ( err ) {
      console.log( err );
    }
  }
