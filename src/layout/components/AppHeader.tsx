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
          今 天 只 有 残 留 的 躯 壳, 迎 接 光 辉 岁 月 ,风 雨 中 抱 紧 自 由,
          一 生 经 过 彷 徨 的 挣 扎 , 自 信 可 改 变 未 来, 问 谁 又 能 做 到.
        </span>
      </div>
    </Header>
  )
}
