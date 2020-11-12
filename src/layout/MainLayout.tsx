import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'

import AppSider from './components/AppSider'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
// import AppBreadcrumb from './components/AppBreadcrumb'
import AppRoutes from './components/AppRoutes'

const { Content } = Layout

class MainLayoutContainer extends React.Component<any> {
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <AppSider />
          <Layout className="site-layout">
            <AppHeader />
            <Content style={{ margin: '0 2px' }}>
              {/* <AppBreadcrumb /> */}
              <AppRoutes />
            </Content>
            <AppFooter />
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default MainLayoutContainer
