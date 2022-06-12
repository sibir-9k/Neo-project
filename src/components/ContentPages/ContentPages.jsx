import React from "react";

import "./ContantPages.scss"
import { CreateClaimPage } from "./CreateClaimPage/CreateClaimPage.jsx";
import { MainPage } from "./MainPage/MainPage.jsx";
import {
  Routes,
  Route
} from "react-router-dom";

export const ContentPages = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="create" element={<CreateClaimPage />} />
      </Routes>
    </div>


  )
}