import React from "react";

import "./Card.scss";
import { Link } from "react-router-dom";


const claimTypeColor = (type) => {
  switch (type) {
    case "Hardwere":
      return { background: '#7DB59A' }
    case "Software":
      return { background: '#FF7675' }
    case "Troubleshooting":
      return { background: '#6C5CE7' }
    case "Networking":
      return { background: '#FDCB6E' }
    default:
      return { background: '#7DB59A' }
  }
}

const claimStatusColor = (status) => {
  switch (status) {
    case "declined":
      return { background: '#E84393' }
    case "new":
      return { background: '#6C5CE7' }
    case "in progress":
      return { background: '#FDCB6E' }
    case "done":
      return { background: '#00B894' }
    default:
      return null
  }
}

export const Card = ({ title, type, create, status, action }) => {
  return (
    <div className="mobile-container">
      <div className="mobile-card">
        <div className="mobile-card__title">{title}</div>
        <div className="mobile-card__body card-body">
          <div className="card-body__created">
            <b>Created</b>
            <div>{create}</div>
          </div>
          <div className="card-body__type">
            <b>Type</b>
            <div className="type-block">
              <div className="table-type__circle" style={claimTypeColor(type)}></div>
              {type}
            </div>
          </div>
          <div className="card-body__status">
            <b>Status</b>
            <div style={claimStatusColor(status)}>{status}</div>
          </div>
          <Link to="incoming">{action}</Link>
        </div>
      </div>

    </div>
  )
}
