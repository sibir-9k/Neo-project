import React from "react";
import { useSelector } from "react-redux"

import "./Table.scss"
import { RowTable } from "./RowTable/RowTable"
import { useMobile } from "../../../hooks/useMobile";
import { Card } from "../Card/Card";



// const claimTypeColor = (type) => {
//   switch (type) {
//     case "Hardwere":
//       return { background: '#7DB59A' }
//     case "Software":
//       return { background: '#FF7675' }
//     case "Troubleshooting":
//       return { background: '#6C5CE7' }
//     case "Networking":
//       return { background: '#FDCB6E' }
//     default:
//       return null
//   }
// }

// const claimStatusColor = (status) => {
//   switch (status) {
//     case "declined":
//       return { background: '#E84393' }
//     case "new":
//       return { background: '#6C5CE7' }
//     case "in progress":
//       return { background: '#FDCB6E' }
//     case "done":
//       return { background: '#00B894' }
//     default:
//       return null
//   }
// }


const MobileTable = (props) => {
  return (
    props.rowBlock.map((item, index) => {
      return (
        <Card
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
              status={item.status} />
          )
        })
      }
    </table>
  )
}

export const Table = () => {

  const rowBlock = useSelector((state) => state.list.claims)

  const { isMobile } = useMobile();

  return (
    <>
      {isMobile ? <MobileTable rowBlock={rowBlock} /> : <DesktopTable rowBlock={rowBlock} />}
    </>
  )
}