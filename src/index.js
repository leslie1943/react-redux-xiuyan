import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { routes } from './routes'
import RouteLink from './components/RouteLink'

// import { routes } from './routes/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

// below 2 import sentences for Redux
import { Provider } from 'react-redux'
// 引入全局的reducers(store: 单一数据源)
import { store } from './reducers'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RouteLink />
      <div style={{ margin: 0 }}>
        <Switch>
          {/* <MainLayout> */}
          {/* exact is important attributes here */}
          {routes.map(({ path, component }, index) => (
            <Route key={index} exact path={path} component={component} />
          ))}
          {/* </MainLayout> */}
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
