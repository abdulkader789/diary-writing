// main.js
import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import '../src/styles/styles.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Dashboard from './components/Dashboard/Dashboard';
import { Login, Register } from './pages/Auth';
import ProjectDetails from './components/Projects/ProjectDetails';
import CreateProject from './components/Projects/CreateProject';
import store from './store/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'project/:id',
        element: <ProjectDetails />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'create',
        element: <CreateProject />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
