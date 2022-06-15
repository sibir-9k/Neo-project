import React, { useState } from "react";

import "./Navbar.scss";
import {
  LogoHome,
  IconHome,
  IconGlobal,
  IconArchive,
  IconPieChart,
  IconDollarSing,
  IconDatabase,
  IconNavigation,
} from "../../../assets/img/index.js"
import { Link } from "react-router-dom";

const navBlocks = [
  {
    key: "1", img: IconHome, path: "/"
  },
  {
    key: "2", img: IconGlobal, path: "/global"
  },
  {
    key: "3", img: IconArchive, path: "/achive"
  },
  {
    key: "4", img: IconPieChart, path: "/chart"
  },
  {
    key: "5", img: IconDollarSing, path: "/dollar"
  },
  {
    key: "6", img: IconDatabase, path: "/database"
  },
  {
    key: "7", img: IconNavigation, path: "/naviganion"
  }
]

export const NavBar = () => {
  const [activeNavBlocks, setActiveNavBlocks] = useState(0)

  return (
    <div className="navbar">
      <button className="navbarLogo" to="/">
        <img src={LogoHome} alt="logo-company" />
      </button>
      {
        navBlocks.map((item, index) => {
          return (
            <Link to={item.path} key={item.key} type="button" className={activeNavBlocks === index ? "navbarItem_active" : "navbarItem"}
              onClick={() => setActiveNavBlocks(index)}>
              <img src={item.img} alt="" />
            </Link>
          )
        })
      }
    </div>
  )
}

