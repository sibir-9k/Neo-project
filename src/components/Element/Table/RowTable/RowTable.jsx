import React from "react"
import { claimStatusColor } from "../../../../functions/claimStatusColor.js"
import { claimTypeColor } from "../../../../functions/claimTypeColor.js"
import "./RowTable.scss"
import { Link } from "react-router-dom"

export const RowTable = ({ title, type, create, status }) => {
  return (
    <>
      <tbody className="table-string">
        <tr>
          <td className="table-string__title">{title}</td>
          <td className="table-string__create">{create}</td>
          <td className="table-type">
            <div className="table-type__circle" style={claimTypeColor(type)}></div>
            {type}
          </td>
          <td><div className="table-btn__statys" style={claimStatusColor(status)}>{status}</div></td>
          <td className=""><Link to="incoming">Browse</Link></td>
        </tr>
      </tbody>
    </>
  )
}