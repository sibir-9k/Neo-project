import React, { useState } from "react";

import "./Table.scss"
import { RowTable } from "./RowTable/RowTable"
// import {Pagination} from "../../UI/Pagination/Pagination"
import { useMobile } from "../../../hooks/useMobile";
import { Card } from "../Card/Card";

const MobileTable = () => <Card />;

const DesktopTable = (props) => {
  console.log(props)
  return (
    <table>
      <tr className="table-header">
        <th className="table-header__title">Title</th>
        <th className="table-header__title">Created</th>
        <th className="table-header__title">Type</th>
        <th className="table-header__title">Status</th>
        <th className="table-header__title">Actions</th>
      </tr>

      {
        props.rowBlock.map((item, index) => {
          return (
            < RowTable
              title={item.title}
              type={item.type}
              create={item.create}
              status={item.status}
              action={item.action} />
          )

        })
      }
    </table>
  )
}

export const Table = () => {
  const [rowBlock, setRowBlock] = useState([
    {
      title: 'Figma smart web system for to build',
      create: '12/04/2021',
      type: 'Hardware',
      status: 'declined',
      actions: 'Browse'
    },
    {
      title: 'Figma smart web system for to build',
      create: '12asdgkns/04/2021',
      type: 'Hardware',
      status: 'declined',
      actions: 'Browse'
    },
    {
      title: 'Figma smart web system for to build',
      create: '1215135135/04/2021',
      type: 'Hardware',
      status: 'declined',
      actions: 'Browse'
    }
  ])

  const { isMobile } = useMobile();
  return (
    <>
      {isMobile ? <MobileTable /> : <DesktopTable rowBlock={rowBlock} />}
      {/* <Pagination/> */}
    </>
  )
}