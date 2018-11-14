import React, { Component } from "react";
import MenuCategory from "./MenuCategory";

class MenuCategories extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1-of-3">
          <a href="/menu/drinks">
            <MenuCategory text="Drinks"/>
          </a>
        </div>
        <div className="col-1-of-3">
          <MenuCategory text="Soups"/>
        </div>
        <div className="col-1-of-3">
          <MenuCategory text="Breakfast"/>
        </div>
      </div>
    );
  }
}

export default MenuCategories;
