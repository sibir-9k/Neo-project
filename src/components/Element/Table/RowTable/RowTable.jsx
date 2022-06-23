import React from "react"

import "./RowTable.scss"
import { Link } from "react-router-dom"



export const RowTable = ({title, type, create, status, action}) => {

  return (
    <>
      <tr className="table-string">
        <td className="table-string__title">{title}</td>
        <td className="table-string__create">{create}</td>
        <td className="table-type">
          <div className="table-type__circle"></div>
          {type}
        </td>
        <td><div className="table-btn__statys">{status}</div></td>
        <td className=""><Link to="incoming">{action}</Link></td>
      </tr>
    </>

  )
}