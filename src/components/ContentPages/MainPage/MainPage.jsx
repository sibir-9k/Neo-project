import React from "react";

import { Table } from "../../Element/Table/Table.jsx";
import { Button } from "../../UI/Button/Button.jsx";
import "./MainPage.scss"

export const MainPage = () => {
  return (
    <>
      <div className="title">
        <h1>Your claims</h1>
        <Button />
      </div>
      <Table />
    </>
  )
}

