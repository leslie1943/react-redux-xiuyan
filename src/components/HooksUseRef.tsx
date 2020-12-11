import { Spin } from 'antd'
import React, { useRef } from 'react'
import { useLoadPost } from '../hooks/post'

export default function HooksUseRef() {
  const username = useRef()
  // 调用自定义 hook
  const { post, loading } = useLoadPost()

  function handler() {
    console.info('username', username)
    console.info('username', (username.current as any).value)
  }

  return (
    <div>
      <div>
        <input ref={username as any} onChange={handler} />
      </div>
      <p>测试自定义Hook在这个组件的使用</p>
      <div>
        <Spin spinning={loading}>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </Spin>
      </div>
    </div>
  )
}
