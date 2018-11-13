import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="app">
        <div className="banner">
          <div className="banner__title">Welcome to</div>
          <div className="banner__body">African restaurant</div>
          <div className="banner__text">
            Hello fellow food lovers, Try our delicious african cuisine and have
            your taste buds tickled
          </div>
          <div>
            <Link to="/menu" className="banner__button">
              Browse our Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
