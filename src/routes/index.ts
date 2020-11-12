import App from '../App'
import Hooks from '../pages/Hooks/index'
import ParentChildState from '../pages/ParentChildState/index'
import ProfileClass from '../pages/ProfileClass'
import ReducerCounter from '../pages/ReducerCounter'
import ReducerConfig from '../pages/ReducerConfig'
import ReducerTodo from '../pages/ReducerTodo'
import Tacos from '../pages/Tacos'

import { RouteProps } from 'react-router-dom'

interface RoutePropsMore extends RouteProps {
  name?: string
}

const routes: Array<RoutePropsMore> = [
  {
    path: '/',
    component: App,
    name: 'Home',
  },
  {
    path: '/hooks',
    component: Hooks,
    name: 'Hooks demo',
  },
  {
    path: '/state',
    component: ParentChildState,
    name: 'State',
  },
  {
    path: '/profile',
    component: ProfileClass,
    name: 'Profile',
  },
  {
    path: '/reducer-static',
    component: ReducerCounter,
    name: 'Reducer counter',
  },
  {
    path: '/reducer-config',
    component: ReducerConfig,
    name: 'Reducer config',
  },
  {
    path: '/reducer-todo',
    component: ReducerTodo,
    name: 'Reducer todo',
  },
  {
    path: '/tacos',
    component: Tacos,
    name: 'Routes nest',
  },
]

export { routes }
