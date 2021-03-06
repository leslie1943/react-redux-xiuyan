import React, { useEffect } from 'react'

export default function UseEffecAsync() {
  /**
   * ❌❌❌ 这种异步的方式是不被允许的,原因是这种方式会返回一个Promise对象,改变了useEffect回调函数的本质
    useEffect(async () => {
      const result = await getData()
    }, [])
   */

  //  ✅✅✅ 异步方式-1
  useEffect(() => {
    // 定义异步方法 再调用的方式
    async function fetchData() {
      const response = await getData()
      console.info('response', response)
    }
    fetchData()
  }, [])

  //  ✅✅✅ 异步方式-2
  useEffect(() => {
    // 自执行函数
    ;(async () => {
      const result = await getData()
      console.info('result', result)
    })()
  }, [])
  return (
    <div>
      <section>UseEffct demo</section>
    </div>
  )
}

function getData() {
  return new Promise((resolve) => {
    resolve({ msg: 'Hello' })
  })
}
