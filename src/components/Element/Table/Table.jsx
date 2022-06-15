import React from "react";

import "./Table.scss"
import { RowTable } from "./RowTable/RowTable"
// import {Pagination} from "../../UI/Pagination/Pagination"
import { useMobile } from "../../../hooks/useMobile";
import { Card } from "../Card/Card";

const MobileTable = () => <Card/>;

const DesktopTable = () =>
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

export const Table = () => {

  const { isMobile } = useMobile();
 
  return (
   <>
    {isMobile ? <MobileTable /> : <DesktopTable />}
    {/* <Pagination/> */}
   </>
  )
}