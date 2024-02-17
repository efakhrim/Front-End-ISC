/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './App'
import List from './pages/List.jsx';
import Monitoring from './pages/Monitoring';
import History from './pages/History.jsx';
import Auth from './auth/Auth.jsx';
import EditList from './components/EditList.jsx';
import MonitorDetail from './components/Charts.jsx';
import Dashboard from './pages/Dashboard.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";



  const router = createBrowserRouter([
    {path: "/",element: <App/>},
    {path: "/auth",element: <Auth/>},
    {path: "/dashboard",element: <Dashboard/>},
    {path: "/home",element: <List/>},
    {path: "/monitoring",element: <Monitoring/>},
    {path: "/history",element: <History/>},
    {path: "/editlist/:baby_id",element: <EditList/>},
    {path: "/detailview/:baby_id",element: <MonitorDetail/>},
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )






