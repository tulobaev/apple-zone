import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import { useAuth } from "../context/AppleAuthContext";
import ListProduct from "../components/products/ListProduct";
import DetailsPage from "../pages/DetailsPage";
import AppleProfile from "../authentication/profile/AppleProfile";
import Login from "../authentication/login/Login";
import Register from "../authentication/register/Register";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import BasketPage from "../pages/BasketPage";

const MainRoutes = () => {
  const { user } = useAuth();
  const publicRoutes = [
    {
      link: "/",
      element: <HomePage />,
    },
    {
      link: "/login",
      element: <Login />,
    },
    {
      link: "/register",
      element: <Register />,
    },
    {
      link: "/list",
      element: <ListProduct />,
    },
    {
      link: "/details/:id",
      element: <DetailsPage />,
    },
    {
      link: "/profile",
      element: <AppleProfile />,
    },
    {
      link: "*",
      element: <NotFoundPage />,
    },
    {
      link: "/basket",
      element: <BasketPage />,
    },
  ];
  const privateRoutes = [
    {
      link: "/admin",
      element: <AdminPage />,
    },
    {
      link: "/edit/:id",
      element: <EditPage />,
    },
  ];
  return (
    <Routes>
      {publicRoutes.map((item, index) => (
        <Route path={item.link} element={item.element} key={index} />
      ))}
      {user
        ? user.email === "talgattulobaev519@gmail.com"
          ? privateRoutes.map((item, index) => (
              <Route path={item.link} element={item.element} key={index} />
            ))
          : null
        : null}
    </Routes>
  );
};

export default MainRoutes;
