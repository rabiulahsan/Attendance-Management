import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LogInLayout from "../Layout/LogInLayout/LogInLayout";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogInLayout></LogInLayout>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/home",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
