import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__left">
          <Link to="/">
            <span className="header__left-text">
              Ruby Continental | Restaurant
            </span>
          </Link>
        </div>

        <div className="header__right">
          <Link to="/menu" className="header__right-item">
            <span>Menu Categories</span>
          </Link>
          <Link to="/order" className="header__right-item">
            <span>Review Order</span>
          </Link>
          <Link to="/checkout" className="header__right-item">
            <span>Checkout</span>
          </Link>
        </div>
      </div>
    );
  }
}
