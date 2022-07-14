import React from "react";
import { claimTypeColor } from "../../../functions/claimTypeColor.js";
import { claimStatusColor } from "../../../functions/claimStatusColor.js";
import "./Card.scss";
import { Link } from "react-router-dom";

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
