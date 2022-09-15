import {  useRoutes } from 'react-router-dom';
import Register from 'src/pages/Register';
import Login from 'src/pages/Login';

export default function Router() {
  return useRoutes([
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
  ]);
}
