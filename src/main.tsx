import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Landing/Landing";
import MenuPage from "./pages/Menu/Menu";
import AboutPage from "./pages/About/About";
import CartPage from "./pages/Cart";
import StatusPage from "./pages/Status";
import ProfilePage from "./pages/Profile";
import "./main.scss";
import DefaultLayout from "./layouts/Default";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/status",
    element: <StatusPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
