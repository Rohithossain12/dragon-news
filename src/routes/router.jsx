import { createBrowserRouter, Navigate } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import Category from "../components/layout-components/Category";
import About from "../components/layout-components/About";
import Career from "../components/layout-components/Career";
import AuthLayout from "../components/layout-components/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({params}) =>
          fetch(` https://openapi.programming-hero.com/api/news/category/${params.id}`),
      },
    ],
  },

  {
    path: "/about",
    element: <About></About>,
  },

  {
    path: "/career",
    element: <Career></Career>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
   {
    path:"/auth/login",
    element:<h2>Login</h2>
   },
   {
    path:"/auth/register",
    element:<h2>Register</h2>
   }

    ]
  },
]);

export default router;