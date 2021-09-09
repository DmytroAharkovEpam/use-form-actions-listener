import { takeEvery, all, delay, call, put } from "redux-saga/effects";
import { SUBMIT_MY_FORM, submitMyForm as submitMyFormAction } from "./actions";
import { reset, submit } from "../../form/actions";
import { FormNames } from "../../constants";

export function* submitMyForm(action: ReturnType<typeof submitMyFormAction>) {
  // wait for backend response
  yield delay(1000);

  if (!action.payload.form.phone) {
    console.log("Submitted! Well done");

    return;
  }

  console.log("form is not valid, user selects what to do");

  // wait for user input
  yield delay(1000);

  const userInput: number = yield call(Math.random);

  // 0 or 1 values
  const nextCommand = Math.floor(userInput * 2);

  if (nextCommand === 0) {
    console.log("user resets form");
    yield put(reset(FormNames.MyForm));
  } else if (nextCommand === 1) {
    console.log("user submits form again, to verify that is not network issue");
    yield put(submit(FormNames.MyForm));
  }
}

export function* initUISagas() {
  yield all([takeEvery(SUBMIT_MY_FORM, submitMyForm)]);
}
