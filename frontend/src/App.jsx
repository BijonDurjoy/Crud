import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';

//Create router
const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />
  }
  ,
  {
    path: '/login',
    element: <Login />
  }
])
function App() {

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />  
      </div>
    </div>
  )
}

export default App
