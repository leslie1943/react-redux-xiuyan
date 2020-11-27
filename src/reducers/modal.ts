// 定义 action 枚举
export const SHOWMODAL = 'showModal'
export const HIDEMODAL = 'hideModal'
export const SHOWMODAL_ASYNC = 'showModal_async'
export const HIDEMODAL_ASYNC = 'hideModal_async'

// 约束 action
export interface ModalAction {
  type: typeof SHOWMODAL | typeof HIDEMODAL
}

export interface ModalState {
  show: boolean
}

// 初始 state
const initialState: ModalState = {
  show: true,
}

const modal = (
  state: ModalState = initialState,
  action: ModalAction
): ModalState => {
  switch (action.type) {
    case SHOWMODAL:
      return {
        show: true,
      }
    case HIDEMODAL:
      return {
        show: false,
      }
    default:
      return state
  }
}

export { modal }
