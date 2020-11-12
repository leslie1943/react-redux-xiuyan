import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout

export default function AppHeader() {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div
        style={{
          color: '#fff',
          textAlign: 'center',
          borderLeft: '1px solid #fff',
        }}
      >
        rong guang wuxian
      </div>
    </Header>
  )
}
