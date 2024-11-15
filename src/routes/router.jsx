import { createBrowserRouter, Navigate } from "react-router-dom";

import HomeLayout from "../layouts/HomeLayout";
import Category from "../components/layout-components/Category";
import About from "../components/layout-components/About";
import Career from "../components/layout-components/Career";
import AuthLayout from "../components/layout-components/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

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
        loader: ({ params }) =>
          fetch(
            ` https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
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
    path: "/news/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
