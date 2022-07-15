import React from "react";
import { Link } from "react-router-dom";

import { IconPlus } from "../../../assets/img/index.js"
import "./Button.scss"
import { useMobile } from "../../../hooks/useMobile/useMobile.jsx";

const MobileTable = () =>
  <Link to="creat-claim" className="createClaim">
    <img src={IconPlus} alt="" />
  </Link>;

const DesktopTable = () =>
  <Link to="create-claim" className="createClaim">
    <img src={IconPlus} alt="" />
    Create claim
  </Link>

export const Button = ({ type, disabled, className, onCreatedClick, value }) => {

  const { isMobile } = useMobile();

  const typeButton = (type) => {
    switch (type) {
      case "cansel":
        return (
          <Link to="/" className="form-cansel__btn">{value}</Link>
        )
      case "create":
        return (
          <button disabled={disabled} className="form-create__btn" onClick={onCreatedClick}>{value}</button>
        )
      case "login/register":
        return (
          <button className={className}>{value}</button>
        )
      case "create-claim":
        return (isMobile ? <MobileTable /> : <DesktopTable />)

      default:
        return <button></button>

    }
  }

  return (
    <>
      {typeButton(type)}
    </>
  )
}
