import React from 'react'
import { Button } from 'antd'

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
      <div>
        Hello, {this.state.name}
        <p>{`【Title from parent】:${this.props.title}`}</p>
        <div>
          <Button onClick={this.childChangeTitle}>
            Second child change title
          </Button>
        </div>
      </div>
    )
  }
}

export default SecondChild
