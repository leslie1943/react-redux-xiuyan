export const DARK = 'DARK'
export const LIGHT = 'LIGHT'

type ActionType = typeof DARK | typeof LIGHT

interface IAction {
  type: ActionType
  color: string
}

export const darkAction: IAction = {
  type: DARK,
  color: '#1a1a1a',
}
export const lightAction: IAction = {
  type: LIGHT,
  color: 'teal',
}

// 当前module下的 store 数据结构
export interface ConfigState {
  color: string
  fontSize: number
}

const initConfig = {
  color: 'papayawhip',
  fontSize: 12,
}

const config = (
  state: ConfigState = initConfig,
  action: IAction
): ConfigState => {
  switch (action.type) {
    case DARK:
      return {
        color: action.color,
        fontSize: 14,
      }
    case LIGHT:
      return {
        color: action.color,
        fontSize: 12,
      }
    default:
      return state
  }
}

export { config }
