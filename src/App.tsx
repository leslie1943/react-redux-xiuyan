import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import FirstChild from './components/FirstChild'
import SecondChild from './components/SecondChild'
import CounterHooksReducer from './components/CounterHooksReducer'
import CounterHooksState from './components/CounterHooksState'
import ProfilePage from './components/ProfilePage'
import CounterSimple from './components/CounterSimple'
import CounterSimleMore from './components/CounterSimleMore'
import ConfigSetting from './components/ConfigSetting'
import './demo/declare-demo'

interface AppState {
  readonly title: string
  readonly name: string
  readonly profile: string
}

class App extends Component<null, AppState> {
  // constructor(props: null) {
  //   super(props)
  //   this.state = { title: 'parent title', name: 'leslie' }
  // }
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
  handleChangeProfile = () => {
    this.setState({
      profile: 'leslie',
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="parent-border">
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
          <hr />
          <div className="child-container">
            <CounterHooksReducer initialCount={100} />
          </div>
          <hr />
          <div className="child-container">
            <CounterHooksState initialCount={100} />
          </div>
          <hr />
          <div
            className="child-container"
            style={{ border: '1px solid #409FEE', padding: 10 }}
          >
            <p>Welcome to {this.state.profile}'s Profile</p>
            <ProfilePage user={this.state.profile} />
            <button onClick={this.handleChangeProfile}>Change profile</button>
          </div>
          <hr />
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
          <div
            style={{ border: '1px solid #f56c6c', padding: 120 }}
            className="child-container"
          >
            <ConfigSetting />
          </div>
          <p></p>
        </header>
      </div>
    )
  }
}

export default App
