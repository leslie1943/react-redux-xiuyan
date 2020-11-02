import React from 'react'
import { Link } from 'react-router-dom'

function RouteLink() {
  return (
    <div style={{ backgroundColor: 'cadetblue', padding: 2 }}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hooks">Hooks demo</Link>
        </li>
        <li>
          <Link to="/state">State</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/reducer-static">Reducer counter</Link>
        </li>
        <li>
          <Link to="/reducer-config">Reducer config</Link>
        </li>
        <li>
          <Link to="/reducer-todo">Reducer todo</Link>
        </li>
      </ul>
    </div>
  )
}

export default RouteLink
