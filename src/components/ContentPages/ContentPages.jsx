import React from "react";

import "./ContentPages.scss"
import {Routes, Route} from "react-router-dom";
import { CreateClaimPage } from "./CreateClaimPage/CreateClaimPage.jsx";
import { MainPage } from "./MainPage/MainPage.jsx";
import { IncomingClaimPage } from "./CreateClaimPage/IncomingClaimPage/IncomingClaimPage";
import { LoginPage } from "./LoginPage/LoginPage";

export const ContentPages = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="create" element={<CreateClaimPage />} />
        <Route path="incoming" element={<IncomingClaimPage />} />
      </Routes>
    </div>
  )
}