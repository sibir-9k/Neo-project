import React from "react";

import { IconPlus } from "../../../assets/img/index.js"
import "./Button.scss"
import { Link } from "react-router-dom";
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
      {/* {isMobile ? <MobileTable /> : <DesktopTable />} */}
    </>
  )
}










// export const CanselButton = () => {
//   return (
//     <Link to="/" className="form-cansel__btn">Cansel</Link>
//   )
// }

// export const CreateButton = ({ onCreatedClick, disabled }) => {
//   return (
//     <button disabled={disabled} className="form-create__btn" onClick={onCreatedClick}>Create</button>
//   )
// }

// export const IncomingButton = () => {
//   return (
//     <button className="form-decline__btn">Decline</button>
//   )
// }

// export const LoginButton = () => {
//   return (
//     <button className="login-form__btn">Login</button>
//   )
// }

// export const RegButton = () => {
//   return (
//     <button className="login-form__btn">Register</button>
//   )
// }