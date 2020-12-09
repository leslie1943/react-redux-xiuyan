import React, { Component } from 'react'
// import logo from './logo.svg'
import FirstChild from '../../components/ChildFirst'
import SecondChild from '../../components/ChildSecond'
import { Collapse, Button } from 'antd'
const { Panel } = Collapse

interface ParentChild {
  readonly title: string
  readonly name: string
  readonly profile: string
}

class ParentChildState extends Component<any, ParentChild> {
  readonly state = {
    title: 'parent title',
    name: 'leslie',
    profile: 'Dan',
  }

  handleChangeTitle = (newTitle: string = 'parent title'): void => {
    this.setState({
      title: newTitle,
    })
  }
  render() {
    return (
      <Collapse bordered={false} defaultActiveKey={['1', '2', '3']}>
        <Panel header="parent state" key="1">
          <div>
            <p>Hello,parent name {this.state.name}</p>
            {`【parent title state】: ${this.state.title}`}
            <p>
              <Button
                style={{ marginTop: 10 }}
                onClick={() => this.handleChangeTitle()}
              >
                重置state
              </Button>
            </p>
          </div>
        </Panel>
        <Panel header="first child state" key="2">
          <FirstChild
            emitChangeTitle={this.handleChangeTitle}
            title={this.state.title}
          />
        </Panel>
        <Panel header="second child state" key="3">
          <SecondChild
            emitChangeTitle={this.handleChangeTitle}
            title={this.state.title}
          />
        </Panel>
      </Collapse>
    )
  }
}

export default ParentChildState
