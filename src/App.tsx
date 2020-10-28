import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import FirstChild from './components/FirstChild'
import SecondChild from './components/SecondChild'
import './demo/declare-demo'
import './demo/export-demo'

interface AppState {
  readonly title: string
  readonly name: string
}

class App extends Component<AppState> {
  // constructor(props: null) {
  //   super(props)
  //   this.state = { title: 'parent title', name: 'leslie' }
  // }
  readonly state = {
    title: 'parent title',
    name: 'leslie',
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
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Not finish.
          </a>
          <p></p>
        </header>
      </div>
    )
  }
}

export default App
