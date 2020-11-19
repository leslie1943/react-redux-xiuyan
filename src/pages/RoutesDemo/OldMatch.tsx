import React from 'react'
import { Redirect } from 'react-router-dom'

export default function OldMatch() {
  console.info('old match function')
  return (
    <div style={{ color: 'red' }}>
      <p>old match</p>
      <Redirect to="/routes/will-match" />
    </div>
  )
}
