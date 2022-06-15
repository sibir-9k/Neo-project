import React from "react";

import { Form } from "../../Element/Form/Form";
import { CreateButton } from "../../UI/Button/Button";
import "./CreateClaimPage.scss"

export const CreateClaimPage = () => {
  return (
    <>
      <div className="title">
        <h1>Creating new claim</h1>
      </div>
      <Form />
      <CreateButton/>
    </>
  )
}
