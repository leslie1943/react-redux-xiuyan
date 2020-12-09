import React, { useEffect, useState } from 'react'

export default function UseEffecExample() {
  const [count, setCount] = useState(0)
  function onScroll() {
    console.info('页面发生滚动了😜')
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => {
        // 测试是否清除了
        const title = 'React 4 XiuYan'
        document.title = title + ':' + (count + 1) + ''
        return count + 1
      })
    }, 1000)
    return () => {
      console.info('clear interval event')
      clearInterval(timerId)
    }
  }, [count])

  return (
    <div>
      <span>{count}</span>
    </div>
  )
}
