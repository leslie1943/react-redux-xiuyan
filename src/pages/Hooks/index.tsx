import React, { Component } from 'react'

import UseReducer from '../../components/UseReducer'
import UseStateCounter from '../../components/UserStateCounter'
import UseStateDemo from '../../components/UseStateDemo'
import UseEffectDemo from '../../components/UseEffectDemo'

class HooksDemo extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="child-container" style={{ marginTop: 10 }}>
            <UseReducer initialCount={100} />
          </div>
          <hr />
          <div className="child-container">
            <UseStateCounter initialCount={100} />
          </div>
          <hr />

          <hr />
          <div
            style={{ border: '1px solid #f56c6c', padding: 120 }}
            className="child-container"
          >
            <UseStateDemo />
            <UseEffectDemo />
          </div>
        </header>
      </div>
    )
  }
}

export default HooksDemo
