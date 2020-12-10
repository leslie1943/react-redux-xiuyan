import React, { Component } from 'react'
// import { incrementAction, decrementAction } from '../../reducers/count'
import { RootState, ReduxDispatch } from '../../reducers/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'antd'
import * as counterActions from '../../reducers/actions/counter'

interface Props {
  increment: (payload: number) => any
  decrement: (payload: number) => any
  counter: number
}
class ReduxCounter extends Component<Props, any> {
  render() {
    return (
      <div style={{ margin: 50 }}>
        <Button
          type="primary"
          size="large"
          onClick={() => this.props.increment(20)}
        >
          +
        </Button>
        <span style={{ padding: '10px 10px' }}>
          <Button> {this.props.counter}</Button>
        </span>
        <Button
          type="ghost"
          size="large"
          onClick={() => this.props.decrement(5)}
        >
          -
        </Button>
      </div>
    )
  }
}

// 将 state 映射到 组件的 props
// 左侧属性可以自定义: 右侧的属性是 module下的
const mapStateToProps = (state: RootState) => {
  console.info('state', state)
  return {
    counter: state.counter.count,
  }
}

// 将 action 映射到 组件的 props
// 使用 dispatch来触发 action 可以影响到 reducer 模块下对应的函数,进而更新 模块下的 state
// const mapDispatchToProps = (dispatch: ReduxDispatch) => ({
//   add: () => dispatch(incrementAction),
//   reduce: () => dispatch(decrementAction),
//   ...bindActionCreators(counterActions, dispatch),
// })
const mapDispatchToProps = (dispatch: ReduxDispatch) =>
  bindActionCreators(counterActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter)
