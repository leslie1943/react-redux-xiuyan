import App from '../App'
import Hooks from '../pages/Hooks/index'
import ParentChildState from '../pages/ParentChildState/index'
import ProfileClass from '../pages/ProfileClass'
import ReducerCounter from '../pages/ReducerCounter'
import ReducerConfig from '../pages/ReducerConfig'
import ReducerTodo from '../pages/ReducerTodo'
// import Tacos from '../pages/Tacos'
import Car from '../pages/Tacos/Car'
import Bus from '../pages/Tacos/Bus'
import TacoDemo from '../pages/Tacos/Taco'

import { RouteProps } from 'react-router-dom'

interface RoutePropsMore extends RouteProps {
  name?: string
  icon?: string
  children?: Array<RoutePropsMore>
  hide?: boolean
  isExact?: boolean
}

const routes: Array<RoutePropsMore> = [
  {
    path: '/',
    component: App,
    name: 'Home',
    icon: 'PieChartOutlined',
    hide: false,
    isExact: true,
  },
  {
    path: '/hooks',
    component: Hooks,
    name: 'Hooks demo',
    hide: false,
    isExact: true,
  },
  {
    path: '/state',
    component: ParentChildState,
    name: 'State',
    hide: false,
    isExact: true,
  },
  {
    path: '/profile',
    component: ProfileClass,
    name: 'Profile',
    hide: false,
    isExact: true,
  },
  {
    path: '/reducer',
    name: 'Reducer',
    hide: false,
    isExact: true,
    children: [
      {
        path: '/reducer-static',
        component: ReducerCounter,
        name: 'Reducer counter',
        hide: false,
        isExact: true,
      },
      {
        path: '/reducer-config',
        component: ReducerConfig,
        name: 'Reducer config',
        hide: false,
        isExact: true,
      },
      {
        path: '/reducer-todo',
        component: ReducerTodo,
        name: 'Reducer todo',
        hide: false,
        isExact: true,
      },
    ],
  },
  {
    path: '/tacos',
    name: 'Routes Nest',
    isExact: true,
    hide: false,
    children: [
      {
        path: '/tacos/bus',
        name: 'bus',
        component: Bus,
        hide: false,
        isExact: true,
      },
      {
        path: '/tacos/car',
        name: 'car',
        component: Car,
        hide: false,
        isExact: true,
      },
      {
        path: '/xxx/:id',
        name: 'xxx',
        component: TacoDemo,
        hide: true,
        isExact: true,
      },
    ],
  },
]

export { routes }
