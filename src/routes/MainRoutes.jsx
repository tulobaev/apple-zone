import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import HomePage from "../pages/HomePage";
import StorePage from "../pages/StorePage";

const MainRoutes = () => {
  const publicRoutes = [
    {
      link: "/",
      element: <HomePage />,
    },
    {
      link: "/admin",
      element: <AdminPage />,
    },
    {
      link: "/edit/:id",
      element: <EditPage />,
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
      link: "/store",
      element: <StorePage />,
    },
  ];
  return (
    <Routes>
      {publicRoutes.map((item, index) => (
        <Route path={item.link} element={item.element} key={index} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
