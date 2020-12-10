import React, { useRef } from 'react'

export default function HooksUseRef() {
  const username = useRef()

  function handler() {
    console.info('username', username)
    console.info('username', (username.current as any).value)
  }

  return (
    <div>
      <input ref={username as any} onChange={handler} />
    </div>
  )
}
