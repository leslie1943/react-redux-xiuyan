import * as React from 'react'

// below 4 import sentences for Redux
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { decrement, increment } from '../store/actions'
import { StoreState } from '../type'

export interface IProps {
  value: number
  onIncrement: () => void
  onDecrement: () => void
}

class Counter extends React.Component<IProps> {
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        <br />
        <br />
        <button onClick={onIncrement} style={{ marginRight: 20 }}>
          +
        </button>
        <button onClick={onDecrement}> - </button>
      </p>
    )
  }
}

// 将 reducer 中 的 state 映射(map)到组件的 props 中
const mapStateToProps = (state: StoreState): { value: number } => ({
  value: state,
})
// function mapStateToProps(state: StoreState): { value: StoreState } {
//   return {
//     value: state,
//   }
// }

// 将 reducer 中 的 action 映射(map)到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment()),
})

// 使用 connent 高阶组件 对 Counter 进行包裹: 注入 mapStateToProps/mapDispatchToProps 中的 state 和 method
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
