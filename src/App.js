import React from 'react'
import './styles/index.css'
import { Route, Router, Routes ,RouterProvider } from 'react-router-dom'
import router from './router/Router'
import Layout from './layout/Layout'
import Main from './pages/Main'
import RightSide from './pages/RightSide'


export default function App () {
  return (
    <div id='general_div'>
      {/* <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/right" element={<RightSide />} />
        </Route>
      </Routes>
    </Router> */}
      <RouterProvider router={router} />
    </div>
  )
}