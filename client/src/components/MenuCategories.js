import React, { Component } from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import MenuCategory from "./MenuCategory";
import Header from './Header';

class MenuCategories extends Component {
  render() {
    console.log(this.props);
    return (
        <div>
          <Header />
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
        </div>
    );
  }
}

const GET_CATEGORIES = gql`
  query {
    menuItems {
      category
    }
  }
`;

export default graphql(GET_CATEGORIES)(MenuCategories);
