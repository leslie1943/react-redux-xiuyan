import React, { Component } from 'react'
import { Collapse } from 'antd'

import UseReducer from '../../components/UseReducer'
import UseStateCounter from '../../components/UserStateCounter'
import UseStateDemo from '../../components/UseStateDemo'
import UseEffectDemo from '../../components/UseEffectDemo'
import UseContextDemo from '../../components/UseContextDemo'
const { Panel } = Collapse

class HooksDemo extends Component {
  render() {
    return (
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header="useState demo for count" key="1">
          <UseStateCounter initialCount={100} />
        </Panel>
        <Panel header="useReducer demo for count" key="2">
          <UseReducer initialCount={100} />
        </Panel>
        <Panel header="useState another demo" key="3">
          <UseStateDemo />
        </Panel>
        <Panel header="useEffect demo" key="4">
          <UseEffectDemo />
        </Panel>
        <Panel header="useContext demo" key="5">
          <UseContextDemo />
        </Panel>
      </Collapse>
    )
  }
}

export default HooksDemo
