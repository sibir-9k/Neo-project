import React from "react";

import "./IncomingClaimPage.scss"
import { Form } from "../../../Element/Form/Form";
import { CreateButton, IncomingButton } from "../../../UI/Button/Button";

export const IncomingClaimPage = () => {
  return (
    <>
      <div className="title">
        <h1>Incoming claim</h1>
      </div>
      <Form />
      <div className="conteiner-btn">
        <CreateButton />
        <IncomingButton />
      </div>
    </>
  )
}