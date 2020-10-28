import React, { Component } from 'react'
interface FirstChildProps {
  title: string
  emitChangeTitle: Function
}
interface FirstChildState {
  name: string
  age?: number
}

class FirstChild extends Component<FirstChildProps, FirstChildState> {
  readonly state = {
    name: 'first child name',
  }

  static getDerivedStateFromProps(
    props: FirstChildProps,
    state: FirstChildState
  ) {
    console.info('>>>>>>> getDerivedStateFromProps <<<<<<<')
    console.info('props:', props)
    console.info('state:', state)
    return null
  }

  shouldComponentUpdate() {
    console.info('>>>>>>> shouldComponentUpdate <<<<<<<')
    console.info('props:', this.props)
    console.info('state:', this.state)
    return true
  }

  getSnapshotBeforeUpdate(
    prevProps: FirstChildProps,
    prevState: FirstChildState
  ) {
    console.info('>>>>>>> getSnapshotBeforeUpdate <<<<<<<')
    console.info('prevProps:', prevProps)
    console.info('currentProps:', this.props)

    console.info('prevState:', prevState)
    console.info('currentState:', this.state)

    return {
      name: 'value',
      want: 'from',
      who: 'Snapshot',
      times: 19,
    }
  }

  componentDidUpdate(
    nextProps: FirstChildProps,
    nextState: FirstChildState,
    valueFromSnapshot: any
  ) {
    console.info('>>>>>>> componentDidUpdate <<<<<<<')
    console.info('valueFromSnapshot:', valueFromSnapshot)
  }

  componentDidMount() {
    console.info('>>>>>>> componentDidMount <<<<<<<')
  }

  childChangeTitle = () => {
    this.props.emitChangeTitle('title from first component')
  }

  render() {
    return (
      <div style={{ border: '1px solid #fff', padding: 10 }}>
        Hello, {this.state.name}
        <p>{`【Title from parent】:${this.props.title}`}</p>
        <div>
          <button onClick={this.childChangeTitle}>
            first child change title
          </button>
        </div>
      </div>
    )
  }
}

export default FirstChild
