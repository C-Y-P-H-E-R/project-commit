import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from "./Login"
import Signup from "./Signup"
import Greet from './Greet'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello to router-dom!</div>,
  },
  {
    path: "/login",
    element: (
      <Login />
    ),
  },
  {
    path: "/signup",
    element: (
      <Signup />
    )
  },
  {
    path: "/greet",
    element: (
      <Greet />
    )
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
