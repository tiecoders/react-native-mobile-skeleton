import { all } from 'redux-saga/effects';
import simpleSagas from "./simpleSagas";

function* appSaga() {
    yield all([
        ...simpleSagas
    ]);
}

export default appSaga;