import React from "react"

import "./RowTable.scss"
import {NavLink} from "react-router-dom"



export const RowTable = () => {

  return (
    <tr className="table-string">
      <td className=""></td>
      <td className=""></td>
      <td className="table-type">
        <div className="table-type__circle"></div>
      </td>
      <td><div className="table-btn__statys"></div></td>
      <td className=""><NavLink to="#">Browse</NavLink></td>
    </tr>
  )
}