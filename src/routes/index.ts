import App from '../App'
import HooksDemo from '../pages/Hooks/index'

import { RouteProps } from 'react-router-dom'

const routes: Array<RouteProps> = [
  {
    path: '/',
    component: App as any,
  },
  {
    path: '/hooks',
    component: HooksDemo as any,
  },
]

export { routes }
