import { SHOWMODAL, HIDEMODAL, ModalAction } from '../modal'
// 集中定义 redux 某个 module 的 actions
export const show = (): ModalAction => ({ type: SHOWMODAL })
export const hide = (): ModalAction => ({ type: HIDEMODAL })
