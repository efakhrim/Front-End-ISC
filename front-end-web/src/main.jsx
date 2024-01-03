/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import Dashboard from './pages/Dashboard';
import Monitoring from './pages/Monitoring';
import IncubaControl from './pages/IncubaControl.jsx';
import History from './pages/History.jsx';
import Auth from './auth/Auth.jsx';
import EditList from './components/EditList.jsx';
//import Sidebar from './components/Sidebar.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/auth",
    element: <Auth/>,
  },

  {
    path: "/home",
    element: <Dashboard/>,
  },
  {
    path: "/monitoring",
    element: <Monitoring/>,
  },
  {
    path: "/control",
    element: <IncubaControl/>,
  },
  {
    path: "/history",
    element: <History/>,
  },
  {
    path: "/editlist/:incubator_id",
    element: <EditList/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
