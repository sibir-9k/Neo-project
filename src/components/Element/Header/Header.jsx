import React, {useState} from "react";

import "./Header.scss"
import {
  IconBell,
  UserImg,
  LogOutImg,
  BurgerMenu
} from "../../../assets/img/index.js"
import { Search } from "../../UI/Search/Search";
import { NavBar } from "../Navbar/Navbar";

export const Header = () => {

const [menuActive, setMenuActive] = useState(true)

const showMenu = () => setMenuActive(!menuActive);

  return (
    <header className="header">
      <button className="burger-menu" onClick={showMenu}>
        <img src={BurgerMenu} alt="" />
        <NavBar active={menuActive} setActive={setMenuActive}/>
      </button>
      <Search />
      <div className="header-user">
        <button className="header-user__btn btn-bell">
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
