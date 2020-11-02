import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import Hooks from './pages/Hooks/index'
import ParentChildState from './pages/ParentChildState/index'
import ProfileClass from './pages/ProfileClass'
import ReducerCounter from './pages/ReducerCounter'
import ReducerConfig from './pages/ReducerConfig'
import ReducerTodo from './pages/ReducerTodo'

// import { routes } from './routes/index'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

// below 2 import sentences for Redux
import { Provider } from 'react-redux'
import { store } from './reducers' // 引入全局的reducers(store: 单一数据源)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div style={{ backgroundColor: '#fff' }}>
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
      <div style={{ margin: 10 }}>
        <Switch>
          {/* Home */}
          <Route exact path="/">
            <App />
          </Route>
          {/* Hooks */}
          <Route path="/hooks">
            <Hooks />
          </Route>
          {/* State between parent and child */}
          <Route path="/state">
            <ParentChildState />
          </Route>
          {/* Profile demo */}
          <Route path="/profile">
            <ProfileClass />
          </Route>
          {/* Reducer static demo */}
          <Route path="/reducer-static">
            <ReducerCounter />
          </Route>
          {/* Reducer static demo */}
          <Route path="/reducer-config">
            <ReducerConfig />
          </Route>
          {/* Reducer dynamic demo */}
          <Route path="/reducer-todo">
            <ReducerTodo />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
