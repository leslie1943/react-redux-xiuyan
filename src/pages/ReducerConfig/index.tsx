import React, { Component } from 'react'
import ConfigSetting from '../../components/ReduxConfigSetting'

class ReducerConfig extends Component<any, any> {
  render() {
    return (
      <div style={{ padding: 120 }}>
        <ConfigSetting />
      </div>
    )
  }
}

export default ReducerConfig
