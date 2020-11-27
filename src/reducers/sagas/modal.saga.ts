import { takeEvery, put, delay } from 'redux-saga/effects'
import { ModalAction, SHOWMODAL_ASYNC, HIDEMODAL_ASYNC } from '../modal'
import { show, hide } from '../actions/modal'

function* showModal_async_fn(action: ModalAction) {
  yield delay(2000)
  yield put(show())
}

function* hideModal_async_fn(action: ModalAction) {
  yield delay(2000)
  yield put(hide())
}
export default function* modalSaga() {
  yield takeEvery(SHOWMODAL_ASYNC, showModal_async_fn)
  yield takeEvery(HIDEMODAL_ASYNC, hideModal_async_fn)
}
