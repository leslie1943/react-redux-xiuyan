import React, { Component } from 'react'
import ConfigSetting from '../../components/ConfigSetting'

class ReducerConfig extends Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            style={{ border: '1px solid #f56c6c', padding: 120 }}
            className="child-container"
          >
            <ConfigSetting />
          </div>
          <hr />
        </header>
      </div>
    )
  }
}

export default ReducerConfig
