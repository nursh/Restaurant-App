import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">
            <span>Ruby Continental | Hotel</span>
          </Link>
        </div>

        <div>
          <Link to="/menu">
            <span>Menu Categories</span>
          </Link>
          <Link to="/order">
            <span>Review Order</span>
          </Link>
          <Link to="/checkout">
            <span>Checkout</span>
          </Link>
        </div>
      </div>
    );
  }
}
