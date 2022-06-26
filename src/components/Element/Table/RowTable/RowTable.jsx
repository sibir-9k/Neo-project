import React from "react"

import "./RowTable.scss"
import { Link } from "react-router-dom"



export const RowTable = ({ title, type, create, status }) => {

  const claimTypeColor = (type) => {
    switch (type) {
      case "Hardwere":{
        return { background: '#7DB59A' }
      }
      case "Software":{
        return { background: '#FF7675' }
      }
      case "Troubleshooting":{
        return { background: '#6C5CE7' }
      }
      case "Networking":{
        return { background: '#FDCB6E' }
      }
      default:{
        return null
      }
    }
  }

  const claimStatusColor = (status) => {
    switch (status) {
      case "declined": {
        return { background: '#E84393' }
      }
      case "new": {
        return { background: '#6C5CE7' }
      }
      case "in progress": {
        return { background: '#FDCB6E' }
      }
      case "done": {
        return { background: '#00B894' }
      }
      default:
        return { background: '#00B894'}
    }
  }

  return (
    <>
      <tr className="table-string">
        <td className="table-string__title">{title}</td>
        <td className="table-string__create">{create}</td>
        <td className="table-type">
          <div className="table-type__circle" style={claimTypeColor()}></div>
          {type}
        </td>
        <td><div className="table-btn__statys" style={claimStatusColor()}>{status}</div></td>
        <td className=""><Link to="incoming">Browse</Link></td>
      </tr>
    </>
  )
}