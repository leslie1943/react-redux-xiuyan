import {
  SHOWMODAL,
  HIDEMODAL,
  ModalAction,
  SHOWMODAL_ASYNC,
  HIDEMODAL_ASYNC,
} from '../modal'

// 集中定义 redux 某个 module 的 actions
export const show = (): ModalAction => ({ type: SHOWMODAL })
export const hide = (): ModalAction => ({ type: HIDEMODAL })

export const show_async = () => ({ type: SHOWMODAL_ASYNC })
export const hide_async = () => ({ type: HIDEMODAL_ASYNC })
