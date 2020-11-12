import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes/index'

function RouteLink() {
  return (
    <div style={{ backgroundColor: 'cadetblue', padding: 2 }}>
      <ul>
        {routes.map((route, index) => (
          <li key={route.path as string}>
            <Link to={route.path as string}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RouteLink
