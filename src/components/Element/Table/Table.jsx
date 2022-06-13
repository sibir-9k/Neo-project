import React from "react";

import "./Table.scss"

import { RowTable } from "./RowTable/RowTable"



export const Table = () => {
  
  return (
      <table>
        <tr className="table-header">
          <th className="table-header__title">Title</th>
          <th className="table-header__title">Created</th>
          <th className="table-header__title">Type</th>
          <th className="table-header__title">Status</th>
          <th className="table-header__title">Actions</th>
        </tr>
        <RowTable />
      </table>
  )
}