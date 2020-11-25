import { takeEvery, put, delay } from 'redux-saga/effects'
import { add } from '../actions/counter'
import { INCREMENT_ASYNC } from '../count'
// takeEvery 接收 action
// put 触发 action

function* increment_async_fn() {
  yield delay(2000)
  yield put(add(15))
}

export default function* counterSaga() {
  // 接收action
  yield takeEvery(INCREMENT_ASYNC, increment_async_fn)
}
