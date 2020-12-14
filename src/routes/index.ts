import App from '../App'
import Hooks from '../pages/Hooks/index'
import ParentChildState from '../pages/ParentChildState/index'
import ProfileClass from '../pages/ProfileClass'
import ReducerCounter from '../pages/ReducerCounter'
import ReducerConfig from '../pages/ReducerConfig'
import ReducerTodo from '../pages/ReducerTodo'
import RoutesDemo from '../pages/RoutesDemo/RoutesDemo'
import RoutesParams from '../pages/RoutesDemo/RoutesParams'
import RoutesParamsDetail from '../pages/RoutesDemo/RoutesParamsDetail'
import NoMatchExample from '../pages/RoutesDemo/NoMatchExample'
import OldMatch from '../pages/RoutesDemo/OldMatch'
import SetStateDemo from '../pages/SetState/index'
import ReduxCount from '../pages/ReduxCount/index'

import { RouteProps } from 'react-router-dom'
import WillMatch from 'src/pages/RoutesDemo/WillMatch'
import ReduxModal from '../components/ReduxModal'
import HooksCustom from '../components/HooksCustomDemo'
import HooksImplement from '../components/HooksImplement'
import FormikBasic from '../components/FormikBasic'
import FormikYup from '../components/FormikYup'
import FormikForm from 'src/components/FormikForm'

interface RouteConfigState extends RouteProps {
  name?: string
  icon?: string
  children?: Array<RouteConfigState>
  hide?: boolean
  isExact?: boolean
}

// 存储所有的路由规则
const routes: Array<RouteConfigState> = [
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
    path: '/hooks-custom',
    component: HooksCustom,
    name: 'Hooks custom',
    hide: false,
    isExact: true,
  },
  {
    path: '/react-hooks-implement',
    component: HooksImplement,
    name: 'Hooks imp.',
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
    path: '/set-state',
    component: SetStateDemo,
    name: 'setState',
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
      {
        path: '/redux-counter',
        component: ReduxCount,
        name: 'Redux counter',
        hide: false,
        isExact: true,
      },
      {
        path: '/redux-modal',
        component: ReduxModal,
        name: 'Redux modal',
        hide: false,
        isExact: true,
      },
    ],
  },
  {
    path: '/formik',
    name: 'Formik',
    isExact: true,
    hide: false,
    children: [
      {
        path: '/formik-basic',
        name: 'Formik basic',
        isExact: true,
        hide: false,
        component: FormikBasic,
      },
      {
        path: '/formik-yup',
        name: 'Formik yup',
        isExact: true,
        hide: false,
        component: FormikYup,
      },
      {
        path: '/formik-form',
        name: 'Formik form',
        isExact: true,
        hide: false,
        component: FormikForm,
      },
    ],
  },
  {
    path: '/routes',
    name: 'Routes Nest',
    isExact: true,
    hide: false,
    children: [
      {
        path: '/routes/params',
        name: 'routes-params',
        component: RoutesParams,
        hide: false,
        isExact: true,
      },
      {
        path: '/routes/demo',
        name: 'routes-demo',
        component: RoutesDemo,
        hide: false,
        isExact: true,
      },
      {
        path: '/routes-params-detail/:id',
        name: 'routes params',
        component: RoutesParamsDetail,
        hide: true,
        isExact: true,
      },
      {
        path: '/routes/no-match',
        name: 'routes-no-match',
        component: NoMatchExample,
        hide: false,
        isExact: true,
      },
      {
        path: '/routes/old-match',
        name: 'old-match',
        component: OldMatch,
        hide: false,
        isExact: true,
      },
      {
        path: '/routes/will-match',
        name: 'will-match',
        component: WillMatch,
        hide: false,
        isExact: true,
      },
    ],
  },
]

export { routes }
