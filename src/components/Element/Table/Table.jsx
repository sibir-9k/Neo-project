import React from "react";
import { useSelector } from "react-redux"

import "./Table.scss"
import { RowTable } from "./RowTable/RowTable"
import { useMobile } from "../../../hooks/useMobile/useMobile";
import { Card } from "../Card/Card";


const MobileTable = (props) => {
  return (
    props.rowClaim.map((item, index) => {
      return (
        <Card
          key={index + "card"}
          title={item.title}
          type={item.type}
          create={item.create}
          status={item.status} />
      )
    })
  )
}

const DesktopTable = (props) => {
  return (
    <table>
      <tbody>
        <tr className="table-header">
          <th className="table-header__title">Title</th>
          <th className="table-header__title">Created</th>
          <th className="table-header__title">Type</th>
          <th className="table-header__title">Status</th>
          <th className="table-header__title">Actions</th>
        </tr>
      </tbody>

      {
        props.rowClaim.map((item, index) => {
          return (
            < RowTable
              key={index + "row"}
              title={item.title}
              type={item.type}
              create={item.create}
              status={item.status} />
          )
        })
      }
    </table>
  )
}

export const Table = () => {

  const rowClaim = useSelector((state) => state.claim.claims)

  const { isMobile } = useMobile();

  return (
    <>
      {isMobile ? <MobileTable rowClaim={rowClaim} /> : <DesktopTable rowClaim={rowClaim} />}
    </>
  )
}