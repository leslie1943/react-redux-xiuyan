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
          }}
        >
          人 生 路, 路 迢 迢, 谁 道 自 古 英 雄 多 寂 寥. 若 一 朝 看 透 了,一
          生 清 风 争 多 少.
        </span>
      </div>
    </Header>
  )
}
