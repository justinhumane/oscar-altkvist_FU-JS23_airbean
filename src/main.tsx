import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Landing";
import MenuPage from "./pages/Menu";
import AboutPage from "./pages/About";
import CartPage from "./pages/Cart";
import StatusPage from "./pages/Status";
import ProfilePage from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
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
    path: "/status",
    element: <StatusPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
