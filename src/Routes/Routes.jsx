import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../Pages/UserDashboard/MyProfile/MyProfile";
import PostDetails from "../Pages/PostDetails/PostDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path:'posts/:id',
        element:<PostDetails></PostDetails>,
        loader:({params}) => fetch(`http://localhost:5000/posts/${params.id}`)
      }
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
]);
