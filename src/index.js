import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './views/Login/Login';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import Product from './views/Product/Product';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  }, 
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/product/:id',
    element:<Product/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);


