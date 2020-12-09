import React, { Component } from 'react'
import { Collapse } from 'antd'

import UseReducer from '../../components/HooksUseReducer'
import UseStateCounter from '../../components/HooksUserStateCounter'
import UseStateDemo from '../../components/HooksUseStateDemo'
import UseEffectDemo from '../../components/HooksUseEffectDemo'
import UseContextDemo from '../../components/HooksUseContextDemo'
import UseEffectExample from '../../components/HooksUseEffecExample'
import UseEffecParams from '../../components/HooksUseEffecParams'
import UseEffecAsync from '../../components/HooksUseEffecAsync'
import HooksUseMemo from '../../components/HooksUseMemo'
const { Panel } = Collapse

class HooksDemo extends Component {
  render() {
    return (
      <Collapse bordered={false} defaultActiveKey={[]}>
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
        <Panel header="useEffect example" key="6">
          <UseEffectExample />
        </Panel>
        <Panel header="useEffect params example" key="7">
          <UseEffecParams />
        </Panel>
        <Panel header="useEffect async function" key="8">
          <UseEffecAsync />
        </Panel>
        <Panel header="UseMemo demo" key="9">
          <HooksUseMemo />
        </Panel>
      </Collapse>
    )
  }
}

export default HooksDemo
