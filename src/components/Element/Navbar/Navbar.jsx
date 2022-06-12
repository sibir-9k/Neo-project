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
  IconNavigation
} from "../../../assets/img/index.js"
import { Link } from "react-router-dom";


export const NavBar = () => {
  const [navBlocks, setNavBlocks] = useState([
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
  ])

  return (
    <div className="navbar">
      <buttom className="navbarLogo" href="./#">
        <img src={LogoHome} alt="logo-company" />
      </buttom>
      {
        navBlocks.map((item, index) => {
          return (
            <Link to="" className="navbarItem" key={index}>
              <img src={item.img} alt="" />
            </Link>
          )
        })
      }
    </div>
  )
}

