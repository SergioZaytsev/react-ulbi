import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostsPage from "../pages/PostsPage";

import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import Navbar from "../components/Navbar";
import DetailPost from "../pages/DetailPost";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import { Navigate } from "react-router-dom";

export const privateRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/posts" />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/posts",
        element: <PostsPage />,
      },
      {
        path: "/detailPost/:id",
        element: <DetailPost />,
      },
    ],
  },
]);

export const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/register",
    element: <Register />,
  },
]);
