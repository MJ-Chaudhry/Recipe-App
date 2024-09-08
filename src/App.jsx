import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Tabs from './routes/Tabs';
import Home from './routes/home/Home';
import SignUp from './routes/registration/SignUp';
import Login from './routes/registration/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tabs />,
    children: [
      {
        path: "",  // Home
        element: <Home />
      },
      {
        path: "saved",
        element: <p>Saved</p>
      },
      {
        path: "favorites",
        element: <p>Favorites</p>
      },
      {
        path: "settings",
        element: <p>Settings</p>
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <SignUp />
      }
    ],
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
