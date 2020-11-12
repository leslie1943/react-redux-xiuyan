import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.scss'

import * as serviceWorker from './serviceWorker'

// below 2 import sentences for Redux
import { Provider } from 'react-redux'
// 引入全局的reducers(store: 单一数据源)
import { store } from './reducers'
// 引入布局
import MainLayout from './layout/MainLayout'

ReactDOM.render(
  <Provider store={store}>
    <MainLayout />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
