import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/LogIn/Login.jsx';
import Resister from './Components/Resister/Resister.jsx';
import ResisterRbs from './Components/Register-RBS/ResisterRbs.jsx';
import ResisterBS from './Components/Resister-BS/ResisterBS.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/resister",
        element: <Resister></Resister>
      },
      {
        path: "/resister-rbs",
        element: <ResisterRbs></ResisterRbs>
      },
      {
        path: "/resister-bs",
        element: <ResisterBS></ResisterBS>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
