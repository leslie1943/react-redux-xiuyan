import React, { useEffect, useState } from 'react'
import { Button } from 'antd'

export default function UseEffecParams() {
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState({ name: 'leslie' })

  useEffect(() => {
    console.info('执行了useEffect')
    document.title = count + ''
  }, [count])
  return (
    <div>
      <section>
        <span>{count}</span>
        <Button onClick={() => setCount(count + 1)}>Add</Button>
      </section>
      <section>
        <span>{person.name}</span>
        <Button onClick={() => setPerson({ name: 'xxxx' })}>
          Change person
        </Button>
      </section>
    </div>
  )
}
