import React from "react";

import { Form } from "../../../Element/Form/Form";
import { IncomingButton } from "../../../UI/Button/Button";
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
        <Form />
        {/* <div className="conteiner-btn"> */}
        <IncomingButton />
        {/* </div> */}
      </div>
    </>
  )
}