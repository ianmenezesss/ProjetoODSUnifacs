import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './Menu'
import Queimada from './Queimada'
import Araraazul from './Araraazul'
import Especies from './Especies'
import Ipe from './Ipe'
import Ods from './Ods'
import Onca from './Onca'
import Pantanal from './Pantanal'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />
  },
  {
    path: "Queimada",
    element: <Queimada />,
  },
  {
    path: "Araraazul",
    element: <Araraazul />,
  },
  {
    path: "Especies",
    element: <Especies />,
  },
  {
    path: "Ipe",
    element: <Ipe />,
  },
  {
    path: "Ods",
    element: <Ods />,
  },
  {
    path: "Onca",
    element: <Onca />,
  },
  {
    path: "Pantanal",
    element: <Pantanal />,
  },
  {
    path: "Login",
    element: <Login />,
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



