import React from "react";

import "./Card.scss";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="mobile-container">
      <div className="mobile-card">
        <div className="mobile-card__title">Figma smart web system for to build</div>
        <div className="mobile-card__body card-body">
          <div className="card-body__created">
            <b>Created</b>
            <div>12/04/2021</div>
          </div>
          <div className="card-body__type">
            <b>Type</b>
            <div>Hardware</div>
          </div>
          <div className="card-body__status">
            <b>Status</b>
            <div>declined</div>
          </div>
          <Link to="incoming">Browse</Link>
        </div>
      </div>
      <div className="mobile-card">
        <div className="mobile-card__title">Figma smart web system for to build</div>
        <div className="mobile-card__body card-body">
          <div className="card-body__created">
            <b>Created</b>
            <div>12/04/2021</div>
          </div>
          <div className="card-body__type">
            <b>Type</b>
            <div>Hardware</div>
          </div>
          <div className="card-body__status">
            <b>Status</b>
            <div>declined</div>
          </div>
          <Link to="incoming">Browse</Link>
        </div>
      </div>
    </div>
  )
}
