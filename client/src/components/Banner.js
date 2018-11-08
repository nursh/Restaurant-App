import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner__title">Welcome to</div>
        <div className="banner__body">African restaurant</div>
        <div className="banner__text">
          Hello fellow food lovers, Try our delicious african cuisine and have
          your taste buds tickled
        </div>
        <div className="banner__button">
          <a href="#">Browse our Menu</a>
        </div>
      </div>
    );
  }
}

export default Banner;
