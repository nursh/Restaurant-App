import React, { Component } from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { getCategories, getCategoryName } from '../utils/getUniqueCategories';
import MenuCategory from "./MenuCategory";
import Header from './Header';

class MenuCategories extends Component {

  renderRows = (categories) => {
    const items = this.renderCategory(categories);
    const extraRow = (items.length % 3 !== 0 ) ? 1 : 0;
    const rowCount = (items.length / 3) + extraRow;
    const rows = [];
    let start = 0;
    let last, jump;
    last = jump = 3;
    for (let i = 0; i < rowCount; i += 1) {
      const row = (
        <div className="row" key={`row-${i}`}>
          {
            items.slice(start, last).map(item => item)         
          }
        </div>
      );
      rows.push(row);
      start = last;
      last += jump;
    }
    return rows;
  }

  renderCategory = (categories) => {
    const menuCategory = categories.map(category => (
      <div className="col-1-of-3" key={`${category}`}>
        <a href={`/menu/${category}`}>
          <MenuCategory text={`${getCategoryName(category)}`} />
        </a>
      </div>
    ));
    return menuCategory;
  }

  render() {
    const { menuItems } = this.props.data;
    const categories= getCategories(menuItems);
    return (
        <div>
          <Header />
          {this.renderRows(categories)}
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
