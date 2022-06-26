import React from "react";

import { Table } from "../../Element/Table/Table.jsx";
import { Button } from "../../UI/Button/Button.jsx";
import "./MainPage.scss"
import { Navigation } from "../Navigation/Navigation";

export const MainPage = () => {
  return (
    <>
      {/* <Navigation /> */}
      <div className="title">
        <h1>Your claims</h1>
        <Button />
      </div>
      <Table />
    </>
  )
}

