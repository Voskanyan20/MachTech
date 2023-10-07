import React from 'react'
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import { ToastContainer } from 'react-toastify';

export default function App () {
  return (
    <div id='general_div'>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}
