import React from 'react'
import { incrementAction, reduceAction } from '../reducers/calculate'
import { connect } from 'react-redux'
import { RootState, ReduxDispatch } from '../reducers/index'

interface Props {
  num: number
  color: string
  increment: () => any
  decrement: () => any
}

class CounterSimpleMore extends React.Component<Props, any> {
  render() {
    const btnStyle = {
      marginRight: 10,
      background: '#' + this.props.color,
      border: `1px solid #${this.props.color}`,
    }
    return (
      <div>
        <button style={btnStyle} onClick={this.props.increment}>
          +
        </button>
        <button style={btnStyle} onClick={this.props.decrement}>
          -
        </button>
        <p>{this.props.num}</p>
        <p>{this.props.color}</p>
      </div>
    )
  }
}

// 将 state 映射到 组件的 props
// 左侧属性可以自定义: 右侧的属性是 module下的
const mapStateToProps = (state: RootState) => {
  return {
    num: state.calculate.num,
    color: state.calculate.color,
  }
}

/**
 * 函数用途: 将 action 映射到 组件的 props
 * 解释: 使用 dispatch来触发 action 可以影响到 reducer 模块下对应的函数,进而更新 模块下的 state
 * ReduxDispatch 只是 Dispatch 的类型别名, reducers入口文件统一统一
 *
 */
const mapDispatchToProps = (dispath: ReduxDispatch) => ({
  increment: () => dispath(incrementAction),
  decrement: () => dispath(reduceAction),
})

// 注入到组件的props
export default connect(mapStateToProps, mapDispatchToProps)(CounterSimpleMore)
