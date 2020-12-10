import React, { Component } from 'react'
import CounterSimple from '../../components/ReduxCounterSimple'
import CounterSimleMore from '../../components/ReduxCounterSimleMore'

class ReducerCounter extends Component<any, any> {
  render() {
    return (
      <div style={{ margin: 50 }}>
        <p>Counter Component 1</p>
        <CounterSimple />
        <hr />
        <p>Counter Component 2</p>
        <CounterSimleMore />
      </div>
    )
  }
}

export default ReducerCounter
