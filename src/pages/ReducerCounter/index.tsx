import React, { Component } from 'react'
import CounterSimple from '../../components/CounterSimple'
import CounterSimleMore from '../../components/CounterSimleMore'

class ReducerCounter extends Component<null, null> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            style={{ border: '1px solid #f56c6c', padding: 120 }}
            className="child-container"
          >
            <p>Counter Component 1</p>
            <CounterSimple />
            <hr />
            <p>Counter Component 2</p>
            <CounterSimleMore />
          </div>
          <hr />
        </header>
      </div>
    )
  }
}

export default ReducerCounter
