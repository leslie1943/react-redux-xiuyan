import React from 'react'
import { darkAction, lightAction } from '../reducers/config'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../reducers/index'

interface Props {
  color: string
  fontSize: number
  toLight: () => any
  toDark: () => any
}

class CounterSimple extends React.Component<Props, any> {
  render() {
    const btnStyle = {
      marginRight: 10,
    }
    const divStyle = {
      padding: 100,
      backgroundColor: this.props.color,
      fontSize: this.props.fontSize,
    }
    return (
      <div style={divStyle}>
        <button style={btnStyle} onClick={this.props.toLight}>
          To Light
        </button>
        <button style={btnStyle} onClick={this.props.toDark}>
          To Dark
        </button>
        <p>{this.props.color}</p>
        <p>{this.props.fontSize}</p>
      </div>
    )
  }
}

// 将 state 映射到 组件的 props
// 左侧属性可以自定义: 右侧的属性是 module下的
const mapStateToProps = (state: RootState) => {
  return {
    fontSize: state.config.fontSize,
    color: state.config.color,
  }
}

// 将 action 映射到 组件的 props
// 使用 dispatch来触发 action 可以影响到 reducer 模块下对应的函数,进而更新 模块下的 state
const mapDispatchToProps = (dispath: Dispatch) => ({
  toLight: () => dispath(lightAction),
  toDark: () => dispath(darkAction),
})

// 注入到组件的props
export default connect(mapStateToProps, mapDispatchToProps)(CounterSimple)
