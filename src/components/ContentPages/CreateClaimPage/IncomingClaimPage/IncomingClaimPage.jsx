import React from "react";

import { ClaimForm } from "../../../Element/Forms/ClaimForm/ClaimForm";
import { Button } from "../../../UI/Button/Button";
import { Navigation } from "../../Navigation/Navigation";
import "./IncomingClaimPage.scss"
import "../../ContenContainer.scss"

export const IncomingClaimPage = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="title">
          <h1>Incoming claim</h1>
        </div>
        <ClaimForm />
        {/* <div className="conteiner-btn"> */}
        <Button className="form-decline__btn" value="Decline"/>
        {/* </div> */}
      </div>
    </>
  )
}