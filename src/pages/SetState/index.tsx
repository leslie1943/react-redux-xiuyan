import React from 'react'
import { Button } from 'antd'

interface StateType {
  count: number
  name?: string
}

class SetStateDemo extends React.Component<any, StateType> {
  state = {
    count: 0,
  }

  //   + 1
  increment = () => {
    console.info('increment setState前的count', this.state.count)
    this.setState({
      count: this.state.count + 1,
    })
    console.info('increment setState后的count', this.state.count)
  }
  //    +3
  triple = () => {
    console.info('triple setState前的count', this.state.count)
    this.setState({
      count: this.state.count * 1,
    })
    this.setState({
      count: this.state.count * 1,
    })
    this.setState({
      count: this.state.count * 1,
    })
    console.info('triple setState后的count', this.state.count)
  }
  //   + 1
  reduce = () => {
    setTimeout(() => {
      console.info('reduce setState前的count', this.state.count)
      this.setState({
        count: this.state.count - 1,
      })
      console.info('reduce setState后的count', this.state.count)
    }, 0)
  }
  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: 50,
          }}
        >
          <p> 打开控制台查看 setState 究竟是同步更新还是异步更新 </p>
          <Button type="primary" onClick={this.increment}>
            增加
          </Button>
          <Button type="default" onClick={this.triple}>
            三倍
          </Button>
          <Button type="primary" onClick={this.reduce}>
            减少
          </Button>
        </div>
        <div>{this.state.count}</div>
      </div>
    )
  }
}

export default SetStateDemo
