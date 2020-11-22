import { SHOWMODAL, HIDEMODAL, ModalAction } from '../modal'
import { ReduxDispatch } from '../index'

// 集中定义 redux 某个 module 的 actions
export const show = (): ModalAction => ({ type: SHOWMODAL })
export const hide = (): ModalAction => ({ type: HIDEMODAL })

export const show_async = () => (dispatch: ReduxDispatch) => {
  setTimeout(() => {
    dispatch(show())
  }, 2000)
}

export const hide_async = () => (dispatch: ReduxDispatch) => {
  setTimeout(() => {
    dispatch(hide())
  }, 2000)
}
