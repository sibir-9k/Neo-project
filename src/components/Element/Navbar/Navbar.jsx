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
    key: "1",
    title: 'Home',
    img: IconHome,
    path: "/"
  },
  {
    key: "2",
    title: 'Services',
    img: IconGlobal,
    path: "/global"
  },
  {
    key: "3",
    title: 'Storage',
    img: IconArchive,
    path: "/achive"
  },
  {
    key: "4",
    title: 'Charts',
    img: IconPieChart,
    path: "/chart"
  },
  {
    key: "5",
    title: 'Currency',
    img: IconDollarSing,
    path: "/dollar"
  },
  {
    key: "6",
    title: 'Base',
    img: IconDatabase,
    path: "/database"
  },
  {
    key: "7",
    title: 'Locations',
    img: IconNavigation,
    path: "/naviganion"
  }
]

export const NavBar = ({active, setActive}) => {
  const [activeNavBlocks, setActiveNavBlocks] = useState(0)

  return (
    <div className={active  ? "navbar_active" : "navbar"}>
      <button className="navbarLogo" to="/">
        <img src={LogoHome} alt="logo-company" />
      </button>
      {
        navBlocks.map((item, index) => {
          return (
            <Link to={item.path} key={item.key} type="button" className={activeNavBlocks === index ? "navbarItem_active" : "navbarItem"} 
            onClick={() => setActiveNavBlocks(index)}>
              <img src={item.img} alt="" />
              <span>{item.title}</span>
            </Link>
          )
        })
      }
    </div>

  )
}

