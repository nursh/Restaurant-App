import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="app">
        <div className="banner">
          <h1 className="banner-heading">
            <span className="banner-heading__welcome">Welcome to</span>
            <span className="banner-heading__primary">Ruby Continental | Restaurant</span>
          </h1>

          <div className="banner__text">
            Hello fellow food lovers, Try our delicious african cuisine and have
            your taste buds tickled
          </div>
          <Link to="/menu" className="banner__button">
            Browse our Menu
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
