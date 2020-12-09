import React from 'react'

import { routes } from '../../routes/index'
import { Switch, Route } from 'react-router-dom'

// ⭐⭐⭐⭐ 构建项目路由 ⭐⭐⭐⭐
export default function AppRoutes() {
  return (
    <div style={{ margin: 0 }}>
      <Switch>
        {/* exact is important attributes here */}
        {/* router output */}
        {routes.map((route, index) => {
          if (route.children) {
            return route.children.map((child, index) => (
              <Route
                key={child.path as string}
                exact={child.isExact}
                path={child.path}
                component={child.component}
              />
            ))
          } else {
            return (
              <Route
                key={index}
                exact={route.isExact}
                path={route.path}
                component={route.component}
              />
            )
          }
        })}
      </Switch>
    </div>
  )
}
