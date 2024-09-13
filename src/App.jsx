import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Tabs from './routes/Tabs';
import Home from './routes/home/Home';
import SignUp from './routes/registration/SignUp';
import Login from './routes/registration/Login';
import Landing from './routes/landing/Landing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tabs />,
    children: [
      {
        path: "", // Landing page
        element: <Landing />
      },
      {
        path: "home", // Home page
        element: <Home />
      },
      {
        path: "saved",  // Svaed recipe page
        element: <p>Saved</p>
      },
      {
        path: "favorites",  // Favorite recipe page
        element: <p>Favorites</p>
      },
      {
        path: "settings", // Settings page
        element: <p>Settings</p>
      },
      {
        path: "login",  // Login page
        element: <Login />
      },
      {
        path: "signup", // Sign up/registration page
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
