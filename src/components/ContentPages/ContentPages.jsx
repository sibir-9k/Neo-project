import React from "react";

import "./ContantPages.scss"
import { CreateClaimPage } from "./CreateClaimPage/CreateClaimPage.jsx";
import { MainPage } from "./MainPage/MainPage.jsx";
import {
  Routes,
  Route
} from "react-router-dom";
import { IncomingClaimPage } from "./CreateClaimPage/IncomingClaimPage/IncomingClaimPage";
// import { LoginPage } from "./LoginPage/LoginPage";

export const ContentPages = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="create" element={<CreateClaimPage />} />
        <Route path="incoming" element={<IncomingClaimPage />} />
      </Routes>
    </div>


  )
}