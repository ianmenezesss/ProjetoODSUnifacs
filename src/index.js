import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import Menu from './views/Menu'
import Queimada from './views/Queimada'
import Araraazul from './views/Araraazul'
import Especies from './views/Especies'
import Ipe from './views/Ipe'
import Ods from './views/Ods'
import Onca from './views/Onca'
import Pantanal from './views/Pantanal'
import Login from './views/Login'
import Cadastro from './views/Cadastro'
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
  {
    path: "Cadastro",
    element: <Cadastro />,
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



