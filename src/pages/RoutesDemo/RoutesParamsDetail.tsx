import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

// 使用默认的接口类型,第一个泛型参数定义路由的参数类型
interface RouteParams {
  id: string
}
export type RouteProps = RouteComponentProps<RouteParams>

class TacoDemo extends React.Component<RouteProps> {
  render() {
    return <div>{this.props.match.params.id}</div>
  }
}
export default TacoDemo
