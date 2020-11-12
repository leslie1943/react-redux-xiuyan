import React from 'react'
interface Props {
  match: {
    params: {
      id: number | string
    }
  }
}
class TacoDemo extends React.Component<Props> {
  render() {
    console.info(this.props.match.params.id)
    return <div>{this.props.match.params.id}</div>
  }
}
export default TacoDemo
