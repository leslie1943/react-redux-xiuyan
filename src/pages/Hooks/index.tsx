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
import HooksMemo from '../../components/HooksMemo'
import HooksUseCallback from '../../components/HooksUseCallback'
import HooksUseRef from '../../components/HooksUseRef'

const { Panel } = Collapse

class HooksDemo extends Component {
  render() {
    return (
      <Collapse bordered={false} defaultActiveKey={[]}>
        <Panel header="1: useState demo for count" key="1">
          <UseStateCounter initialCount={100} />
        </Panel>
        <Panel header="2:useReducer demo for count" key="2">
          <UseReducer initialCount={100} />
        </Panel>
        <Panel header="3:useState another demo" key="3">
          <UseStateDemo />
        </Panel>
        <Panel header="4:useEffect demo" key="4">
          <UseEffectDemo />
        </Panel>
        <Panel header="5:useContext demo" key="5">
          <UseContextDemo />
        </Panel>
        <Panel header="6:useEffect example" key="6">
          <UseEffectExample />
        </Panel>
        <Panel header="7:useEffect params example" key="7">
          <UseEffecParams />
        </Panel>
        <Panel header="8:useEffect async function" key="8">
          <UseEffecAsync />
        </Panel>
        <Panel header="9:UseMemo demo" key="9">
          <HooksUseMemo />
        </Panel>
        <Panel header="10:Memo demo" key="10">
          <HooksMemo />
        </Panel>
        <Panel header="11:useCallback" key="11">
          <HooksUseCallback />
        </Panel>
        <Panel header="12:useRef" key="12">
          <HooksUseRef />
        </Panel>
      </Collapse>
    )
  }
}

export default HooksDemo
