export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export interface Action {
  type: typeof INCREMENT | typeof DECREMENT
  payload: number
}

// export const incrementAction: Action = {
//   type: INCREMENT,
// }
// export const decrementAction: Action = {
//   type: DECREMENT,
// }

export interface CountState {
  count: number
}

const counter = (
  state: CountState = { count: 0 },
  action: Action
): CountState => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + (action.payload ? action.payload : 0),
      }
    case DECREMENT:
      return {
        count: state.count - (action.payload ? action.payload : 0),
      }
    default:
      return state
  }
}

export { counter }
