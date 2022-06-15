import React from "react";

import "./Footer.scss"
import {LogoHome} from "../../../assets/img/index.js"

export const Footer = () => {
  return(
    <div className="footer">
       <img src={LogoHome} alt="logo-company" />
    </div>
  )
}