import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Landing/Landing";
import MenuPage from "./pages/Menu/Menu";
import AboutPage from "./pages/About/About";
import StatusPage from "./pages/Status/Status";
import ProfilePage from "./pages/Profile/Profile";
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
