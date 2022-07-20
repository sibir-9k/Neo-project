import React from "react";
import { useSelector } from "react-redux";

import { Table } from "../../Element/Table/Table.jsx";
import { Button } from "../../UI/Button/Button.jsx";
import { Navigation } from "../Navigation/Navigation";
import "../ContenContainer.scss";
import "./MainPage.scss";
import { Paginationn } from "../../UI/Pagination/Pagination.jsx";


export const MainPage = () => {
  const role = useSelector((state) => state.user.user.role);
  return (
    <div className="wrapper">
      <Navigation />
      <div className="container">
        <div className="title">
          <h1>Your claims</h1>
          {role.slug === "work" && <Button type="create-claim" />}
        </div>
        <Table />

        <Paginationn />

      </div>
    </div>
  );
};
