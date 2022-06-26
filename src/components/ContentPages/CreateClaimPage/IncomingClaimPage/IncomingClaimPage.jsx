import React from "react";

import "./IncomingClaimPage.scss"
import { Form } from "../../../Element/Form/Form";
import { CanselButton, CreateButton, IncomingButton } from "../../../UI/Button/Button";
import { Navigation } from "../../Navigation/Navigation";

export const IncomingClaimPage = () => {
  return (
    <>
      {/* <Navigation /> */}
      <div className="title">
        <h1>Incoming claim</h1>
      </div>
      <Form />
      {/* <div className="conteiner-btn"> */}
        <IncomingButton />
      {/* </div> */}
    </>
  )
}