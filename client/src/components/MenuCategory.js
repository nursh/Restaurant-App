import React, { Component } from 'react';

class MenuCategory extends Component {
  render() {
    return (
      <div className="menu-category">
        <h2 className="menu-category__title">
          <span className="menu-category__title-text">{this.props.text}</span>
        </h2>
      </div>
    );
  }
}

export { MenuCategory as default };