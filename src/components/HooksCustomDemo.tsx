import React from 'react'
import { Button, Spin, Divider, Input } from 'antd'
import { useLoadPost } from '../hooks/post'
import { useUpdateInput } from '../hooks/input'

export default function HooksCustomDemo(props: any) {
  console.info(props)
  // 调用自定义 hook
  const { post, loading } = useLoadPost()
  // 多次调用返回不同的对象
  const usernameInput = useUpdateInput('suzhen')
  const passworInput = useUpdateInput('1234')

  const submitForm = () => {
    console.info('usernameInput', usernameInput.value)
    console.info('passworInput', passworInput.value)
  }
  return (
    <div style={{ margin: 50 }}>
      <Spin spinning={loading}>
        <div>{post.title}</div>
        <div>{post.body}</div>
      </Spin>
      <Divider />
      <div>
        <form>
          <Input type="text" name="uername" {...usernameInput} />
          <Input type="password" name="password" {...passworInput} />
          <Button type="primary" onClick={submitForm}>
            提交
          </Button>
        </form>
      </div>
    </div>
  )
}
