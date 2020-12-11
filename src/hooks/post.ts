import { useState, useEffect } from 'react'
import axios from 'axios'
interface PostProps {
  title: string
  body: string
}

// 自定义Hook
export function useLoadPost() {
  const [post, setPost] = useState<PostProps>({ title: '', body: '' })
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
      setPost(res.data)
      setLoading(false)
    })
  }, [])
  // 可以返回任意类型的数据,前提是要支持所有调用自定义hook的组件
  return { post, setPost, loading, setLoading }
}
