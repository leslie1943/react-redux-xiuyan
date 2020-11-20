import React from 'react'
import { addAction, reduceAction, ItemState, addTodo } from '../reducers/todo'
import { connect } from 'react-redux'
import { RootState, ReduxDispatch } from '../reducers/index'

interface Props {
  add: () => any
  reduce: () => any
  onPush: (item: ItemState) => void
  todoItems: ItemState[]
}

class TodoDemo extends React.Component<Props> {
  render() {
    const btnStyle = {
      marginRight: 10,
    }

    return (
      <div>
        {/* 添加静态数据 */}
        <button style={btnStyle} onClick={this.props.add}>
          To Add static data
        </button>
        {/* 添加动态数据 */}
        <button
          style={btnStyle}
          onClick={() =>
            this.props.onPush({ name: Math.random().toString(), status: 0 })
          }
        >
          To Push dynamic data
        </button>
        {/* 删除数据 */}
        <button style={btnStyle} onClick={this.props.reduce}>
          To Reduce data
        </button>

        {/* 显示数据 */}
        {this.props.todoItems &&
          this.props.todoItems.map((item, index) => {
            return <p key={index}>{item.name}</p>
          })}
        {!this.props.todoItems.length && <div>暂无待办事项</div>}
      </div>
    )
  }
}

// 将 state 映射到 组件的 props
// 左侧属性可以自定义: 右侧的属性是 module下的
const mapStateToProps = (state: RootState) => {
  return {
    todoItems: state.todo.items,
  }
}

// 将 action 映射到 组件的 props
// 使用 dispatch来触发 action 可以影响到 reducer 模块下对应的函数,进而更新 模块下的 state
const mapDispatchToProps = (dispatch: ReduxDispatch) => ({
  add: () => dispatch(addAction),
  reduce: () => dispatch(reduceAction),
  // action 回传参数
  onPush: (item: ItemState) => dispatch(addTodo(item)),
})

// 注入到组件的props
export default connect(mapStateToProps, mapDispatchToProps)(TodoDemo)
