import React from "react";

import { IconPlus } from "../../../assets/img/index.js"
import "./Button.scss"
import { Link } from "react-router-dom";
import { useMobile } from "../../../hooks/useMobile.jsx";
import { useState } from "react";


const MobileTable = () =>
  <Link to="create">
    <button className="createClaim">
      <img src={IconPlus} alt="" />
    </button>
  </Link>;

const DesktopTable = () =>
  <Link to="create">
    <button className="createClaim">
      <img src={IconPlus} alt="" />
      Create claim
    </button>
  </Link>


export const Button = () => {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile ? <MobileTable /> : <DesktopTable />}
    </>
  )
}





export const CreateButton = () => {

  return (
    <>
      <Link to="/" className="form-cansel__btn">Cansel</Link>
      <button className="form-create__btn" onClick={() => { }}>Create</button>
    </>
  )
}

export const IncomingButton = () => {
  return (
    <button className="form-decline__btn">Decline</button>
  )
} 