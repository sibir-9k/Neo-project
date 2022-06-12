import React from "react";

import "./Search.scss"
import {SearchBtn} from "../../../assets/img/index.js"

export const Search = () => {
  return (
    <div className="header-search">
      <input type="search" placeholder="Search" id="site-search" className="header-search__input" />
      <button className="header-search__btn">
        <img src={SearchBtn} alt="" />
      </button>
    </div>
  )
}