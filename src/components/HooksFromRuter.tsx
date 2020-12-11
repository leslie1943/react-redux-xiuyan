import React, { useState } from 'react'
import {
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
} from 'react-router-dom'

export default function HooksCustomDemo(props: any) {
  console.info(props)
  const [routerHooksConfig] = useState({
    useHistory: useHistory(),
    useLocation: useLocation(),
    useRouteMatch: useRouteMatch(),
    useParams: useParams(),
  })
  console.info('useHistory', useHistory())
  console.info('useLocation', useLocation())
  console.info('useRouteMatch', useRouteMatch())
  console.info('useParams', useParams())

  return (
    <div>
      <p>useHistory: {JSON.stringify(routerHooksConfig.useHistory)}</p>
      <p>useLocation: {JSON.stringify(routerHooksConfig.useLocation)}</p>
      <p>useRouteMatch: {JSON.stringify(routerHooksConfig.useRouteMatch)}</p>
      <p>useParams: {JSON.stringify(routerHooksConfig.useParams)}</p>
    </div>
  )
}
