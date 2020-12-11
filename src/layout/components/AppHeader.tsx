import React from 'react'
import { Layout } from 'antd'

const { Header } = Layout

export default function AppHeader() {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          borderLeft: '1px solid #fff',
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          乘风破浪会有时, 直挂云帆济沧海.
        </span>
      </div>
    </Header>
  )
}
