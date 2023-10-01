import React from 'react'
import { Outlet } from "react-router-dom";

export default function Layout () {
    return (
      <div style={{ display: 'flex' }}>
        <Outlet />
      </div>
    )
  }