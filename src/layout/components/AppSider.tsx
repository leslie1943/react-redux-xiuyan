import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

import { UserOutlined } from '@ant-design/icons'
import { routes } from '../../routes/index'

const { Sider } = Layout
const { SubMenu } = Menu

interface State {
  collapsed: boolean
}
class AppSider extends React.Component<any, State> {
  state = {
    collapsed: false,
  }
  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed })
  }

  render() {
    const { collapsed } = this.state
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {routes.map((route, index) => {
            if (route.children) {
              return (
                <SubMenu
                  key={route.name}
                  icon={<UserOutlined />}
                  title={route.name}
                >
                  {route.children
                    .filter((item) => !item.hide)
                    .map((child, cindex) => {
                      return (
                        <Menu.Item key={child.path as string}>
                          <Link to={child.path as string}>{child.name}</Link>
                        </Menu.Item>
                      )
                    })}
                </SubMenu>
              )
            } else {
              return (
                <Menu.Item key={route.path as string} icon={<UserOutlined />}>
                  <Link to={route.path as string}>{route.name}</Link>
                </Menu.Item>
              )
            }
          })}
        </Menu>
      </Sider>
    )
  }
}

export default AppSider
