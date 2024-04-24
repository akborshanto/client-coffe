import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import UpdateCoffe from './component/UpdateCoffe';
import App from './App';
import AddCoffe from './component/AddCoffe';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    loader:()=>fetch('http://localhost:5000/coffe')
  },
  {
    path:'/updateCoffe/:id',
   element: <UpdateCoffe></UpdateCoffe>,
   loader:({params})=>fetch(`http://localhost:5000/coffe/${params.id}`)
  },
  {
    path:'/addCoffe/:id',
    element:<AddCoffe></AddCoffe>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
