import React from "react";

import "./Header.scss"
import {
  IconBell,
  UserImg,
  LogOutImg
} from "../../../assets/img/index.js"
import { Search } from "../../UI/Search/Search";

export const Header = () => {
  return (
    <header className="header">
      <Search/>
      <div className="header-user">
        <button className="header-user__btn">
          <img src={IconBell} alt="" />
        </button>
        <div className="header-user__account">
          <img src={UserImg} alt="" />
          <div className="header-user__account  account__name">
            <span>Егор Фролов</span>
          </div>
        </div>
        <button className="header-user__btn">
          <img src={LogOutImg} alt="" />
        </button>
      </div>
    </header>
  )
}
