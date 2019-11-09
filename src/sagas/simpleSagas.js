import {delay} from 'redux-saga/effects'
import {takeEvery, call, put} from 'redux-saga/effects'
import {getTimeout} from '../services/helpers'
import {SIMPLE_ACTION, SIMPLE_ACTION_SUCCESSED} from "../actions/simpleActions";

function* simpleSaga() {
    const startingTime = Date.now();

    try {
        yield delay(getTimeout(startingTime, 1000));
        yield put({type: SIMPLE_ACTION_SUCCESSED});
    } catch (e) {
        yield delay(getTimeout(startingTime, 1000));
    }
}

const simpleSagas = [
    takeEvery(SIMPLE_ACTION, simpleSaga)
];

export default simpleSagas;

export {simpleSaga};