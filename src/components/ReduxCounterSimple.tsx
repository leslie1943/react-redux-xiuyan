import React from 'react'
import { incrementAction, reduceAction } from '../reducers/calculate'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../reducers/index'
import { Button } from 'antd'

interface Props {
  num: number
  color: string
  increment: () => any
  decrement: () => any
}

class CounterSimple extends React.Component<Props, any> {
  render() {
    const btnStyle = {
      marginRight: 10,
      background: '#' + this.props.color,
      border: `1px solid #${this.props.color}`,
    }
    return (
      <div>
        <Button style={btnStyle} onClick={this.props.increment}>
          +
        </Button>

        <Button style={btnStyle} onClick={this.props.decrement}>
          -
        </Button>
        <h2>num is: {this.props.num}</h2>
        <h2>color is: {this.props.color}</h2>
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

// 将 action 映射到 组件的 props
// 使用 dispatch来触发 action 可以影响到 reducer 模块下对应的函数,进而更新 模块下的 state
const mapDispatchToProps = (dispath: Dispatch) => ({
  increment: () => dispath(incrementAction),
  decrement: () => dispath(reduceAction),
})

// 注入到组件的props
// connect的作用(1): 订阅 store, 当 store 的状态发生变化, 会重新渲染组件
// connect的作用(2): 获取store中的状态, 将状态通过组件的 props 属性 映射给组件
// connect的作用(3): 获取 dispatch 方法 => 在组件中可以使用 props.dispatch 了
// 语法: connect()()
export default connect(mapStateToProps, mapDispatchToProps)(CounterSimple)
