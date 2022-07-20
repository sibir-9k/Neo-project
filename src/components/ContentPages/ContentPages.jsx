import React from "react";
import { Routes, Route } from "react-router-dom";

import { CreateClaimPage } from "./CreateClaimPage/CreateClaimPage.jsx";
import { MainPage } from "./MainPage/MainPage.jsx";
import { IncomingClaimPage } from "./CreateClaimPage/IncomingClaimPage/IncomingClaimPage";
import { LoginPage } from "./LoginPage/LoginPage";
import { RegisterPage } from "./RegisterPage/RegisterPage.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";

export const ContentPages = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<MainPage />} />
        <Route path="create-claim" element={<CreateClaimPage />} />
        <Route path="incoming/:id" element={<IncomingClaimPage />} />
      </Route>
    </Routes>
  );
};
