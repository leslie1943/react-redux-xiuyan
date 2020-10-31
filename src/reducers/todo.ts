// import { Dispatch } from 'redux'

export const ADD = 'ADD'
export const REDUCE = 'REDUCE'

export interface IAction {
  type: typeof ADD | typeof REDUCE
  item: {
    name: string
    status: number
  }
}

// >>>>>>>>>> 🎃🎃🎃 直接定义 action 的方式 🎃🎃🎃
export const addAction: IAction = {
  type: ADD,
  item: {
    name: 'todo item',
    status: 0,
  },
}
// >>>>>>>>>> 🎃🎃🎃 直接定义 action 的方式 🎃🎃🎃
export const reduceAction: IAction = {
  type: REDUCE,
  item: {
    name: '',
    status: 0,
  },
}

/**
 * >>>>>>>>>> 🎃🎃🎃 定义方法返回 action 的方式(带参数) 🎃🎃🎃
 * 在组件中的 Map 方法 ⏬⏬⏬⏬⏬
 *   const mapDispatchToProps = (dispatch: ReduxDispatch) => ({
 *     // action 回传参数
 *     onPush: (item: ItemState) => dispatch(addTodo(item)),
 *   })
 *
 * 在组件中的 Props   ⏬⏬⏬⏬⏬
 * interface Props {
 *    onPush: (item: ItemState) => void
 * }
 * 在组件中的 调用   ⏬⏬⏬⏬⏬
 *  <button onClick={() => this.props.onPush({ name: Math.random().toString(), status: 0 })}>
 *    To Push
 *  </button>
 */
export const addTodo = (item: ItemState) => {
  return {
    type: ADD,
    item,
  }
}

export interface ItemState {
  name: string
  status: number
}

export interface TodoState {
  items: Array<ItemState>
}

const todo = (state: TodoState = { items: [] }, action: IAction): TodoState => {
  // debugger
  switch (action.type) {
    case ADD:
      const addItems = state.items
      return {
        items: [...addItems, action.item],
      }
    case REDUCE:
      const reduceItems = state.items
      if (reduceItems.length > 0) {
        reduceItems.pop()
      }
      return {
        items: [...reduceItems],
      }
    default:
      return state
  }
}

export { todo }
