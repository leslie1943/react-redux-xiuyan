import React, { Component } from 'react'
// import logo from './logo.svg'
import FirstChild from '../../components/FirstChild'
import SecondChild from '../../components/SecondChild'

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
      <div className="App">
        <header className="App-header">
          <div className="parent-border" style={{ marginTop: 10 }}>
            <p>Hello,parent name {this.state.name}</p>
            {`【parent title state】: ${this.state.title}`}
            <p className="child-container">
              <button onClick={() => this.handleChangeTitle()}>
                重置state
              </button>
            </p>
          </div>
          <hr />
          <div className="child-container">
            <FirstChild
              emitChangeTitle={this.handleChangeTitle}
              title={this.state.title}
            />
          </div>
          <hr />
          <div className="child-container">
            <SecondChild
              emitChangeTitle={this.handleChangeTitle}
              title={this.state.title}
            />
          </div>
        </header>
      </div>
    )
  }
}

export default ParentChildState
