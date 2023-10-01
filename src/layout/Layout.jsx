import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSide from '../pages/LeftSide'
import Main from '../pages/Main'

export default function Layout () {
  return (
    <div style={{ display: 'flex' }}>
      <LeftSide />
      <Main />
      <Outlet />
    </div>
  )
}
