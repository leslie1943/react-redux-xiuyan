import App from '../App'
import Hooks from '../pages/Hooks/index'
import ParentChildState from '../pages/ParentChildState/index'
import ProfileClass from '../pages/ProfileClass'
import ReducerCounter from '../pages/ReducerCounter'
import ReducerConfig from '../pages/ReducerConfig'
import ReducerTodo from '../pages/ReducerTodo'

import { RouteProps } from 'react-router-dom'

const routes: Array<RouteProps> = [
  {
    path: '/',
    component: App,
  },
  {
    path: '/hooks',
    component: Hooks,
  },
  {
    path: '/state',
    component: ParentChildState,
  },
  {
    path: '/profile',
    component: ProfileClass,
  },
  {
    path: '/reducer-static',
    component: ReducerCounter,
  },
  {
    path: '/reducer-config',
    component: ReducerConfig,
  },
  {
    path: '/reducer-todo',
    component: ReducerTodo,
  },
]

export { routes }
