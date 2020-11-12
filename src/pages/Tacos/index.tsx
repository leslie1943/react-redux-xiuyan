import React from 'react'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Bus from '../../pages/Tacos/Bus'
import Car from '../../pages/Tacos/Car'
import { DatePicker } from 'antd'

export default function Tacos() {
  const routes = [
    {
      path: '/tacos/bus',
      component: Bus,
    },
    {
      path: '/tacos/car',
      component: Car,
    },
  ]
  return (
    <Router>
      <div>
        <h2>Tacos</h2>
        <ul>
          <li>
            <Link to="/tacos/bus">Bus</Link>
          </li>
          <li>
            <Link to="/tacos/car">Car</Link>
          </li>
        </ul>
        <DatePicker />
        <Switch>
          {routes.map(({ path, component }, index) => (
            <Route key={index} exact path={path} component={component}></Route>
          ))}
        </Switch>
      </div>
    </Router>
  )
}
