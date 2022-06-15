import React from "react"

import "./RowTable.scss"
import { Link } from "react-router-dom"



export const RowTable = () => {

  return (
    <>
      <tr className="table-string">
        <td className="">Figma smart web system for to build</td>
        <td className="">12/04/2021</td>
        <td className="table-type">
          <div className="table-type__circle"></div>
          Hardware
        </td>
        <td><div className="table-btn__statys">declined</div></td>
        <td className=""><Link to="incoming">Browse</Link></td>
      </tr>
      <tr className="table-string">
        <td className="">Figma smart web system for to build</td>
        <td className="">12/04/2021</td>
        <td className="table-type">
          <div className="table-type__circle"></div>
          Hardware
        </td>
        <td><div className="table-btn__statys">declined</div></td>
        <td className=""><Link to="incoming">Browse</Link></td>
      </tr>
      <tr className="table-string">
        <td className="">Figma smart web system for to build</td>
        <td className="">12/04/2021</td>
        <td className="table-type">
          <div className="table-type__circle"></div>
          Hardware
        </td>
        <td><div className="table-btn__statys">declined</div></td>
        <td className=""><Link to="incoming">Browse</Link></td>
      </tr>
      <tr className="table-string">
        <td className="">Figma smart web system for to build</td>
        <td className="">12/04/2021</td>
        <td className="table-type">
          <div className="table-type__circle"></div>
          Hardware
        </td>
        <td><div className="table-btn__statys">declined</div></td>
        <td className=""><Link to="incoming">Browse</Link></td>
      </tr>
      
    </>

  )
}