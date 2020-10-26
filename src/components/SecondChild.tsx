import React from 'react'

interface FirstChildProps {
  title: string
  emitChangeTitle: Function
}

// type FirstChildState = {
//   name: string
// }

interface FirstChildState {
  name: string
}

class SecondChild extends React.Component<FirstChildProps, FirstChildState> {
  constructor(props: FirstChildProps) {
    super(props)
    this.state = {
      name: 'second child name',
    }
  }

  childChangeTitle = () => {
    this.props.emitChangeTitle('title from second component')
  }

  render() {
    return (
      <div style={{ border: '1px solid pink', padding: 10 }}>
        Hello, {this.state.name}
        <p>{`【Title from parent】:${this.props.title}`}</p>
        <div>
          <button onClick={this.childChangeTitle}>
            Second child change title
          </button>
        </div>
      </div>
    )
  }
}

export default SecondChild
