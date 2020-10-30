import React from 'react'
import { incrementAction, reduceAction } from '../reducers/calculate'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../reducers/index'

interface Props {
  num: number
  increment: () => any
  decrement: () => any
}

class CounterSimple extends React.Component<Props, any> {
  render() {
    return (
      <div>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <p>{this.props.num}</p>
      </div>
    )
  }
}

// 将 state 映射到 组件的 props
const mapStateToProps = (state: RootState) => {
  return {
    num: state.calculate.num,
  }
}

// 将 action 映射到 组件的 props
const mapDispatchToProps = (dispath: Dispatch) => ({
  increment: () => dispath(incrementAction),
  decrement: () => dispath(reduceAction),
})

// 注入到组件的props
export default connect(mapStateToProps, mapDispatchToProps)(CounterSimple)
