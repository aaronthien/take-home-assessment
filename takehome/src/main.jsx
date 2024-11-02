import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Dashboard from './assets/routes/dashboard.jsx';
import Login from './assets/routes/login.jsx';
import Register from './assets/routes/Register.jsx';

const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null; 
};

// Protected route component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { 
    path: "/dashboard", 
    element: <ProtectedRoute element={<Dashboard />} /> 
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
