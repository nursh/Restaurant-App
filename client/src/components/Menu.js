import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import Header from "./Header";

const getOrderId = () => window.localStorage.getItem("orderId");

class Menu extends Component {
  addToOrder = name => async e => {
    let orderId = getOrderId();
    let createdOrder;
    if (!orderId) {
      const newOrder = await this.props.createOrder();
      const { createOrder } = newOrder.data;
      createdOrder = createOrder.id;
      window.localStorage.setItem("orderId", createdOrder);
      orderId = getOrderId();
    }
    await this.props.addOrderItem({
      variables: {
        name,
        quantity: 2,
        price: 2.0,
        order: orderId
      }
    });
  };

  renderMenuItem = menuItems => {
    const itemRows = menuItems.map(({ name, price }) => (
      <tr className="menu-table__body__row" key={name}>
        <td className="menu-table__body-name">{name}</td>
        <td className="menu-table__body-quantity">
          <button className="menu-table__body-button">-</button>
          <span className="menu-table__body-quantity__number">0</span>
          <button className="menu-table__body-button">+</button>
        </td>
        <td className="menu-table__body-price">&#8358;{price}</td>
        <td className="menu-table__body-order">
          <button
            className="menu-table__body-order__button"
            onClick={this.addToOrder(name)}
          >
            Add to Order
          </button>
        </td>
      </tr>
    ));
    return itemRows;
  };

  render() {
    const { menuItems } = this.props.data;
    if (!menuItems) return "Loading...";
    return (
      <div>
        <Header />
        <table className="menu-table">
          <thead>
            <tr>
              <th className="menu-table__heading-items">ITEMS</th>
              <th className="menu-table__heading-quantity">QUANTITY</th>
              <th className="menu-table__heading-amount">AMOUNT</th>
              <th className="menu-table__heading-order" />
            </tr>
          </thead>
          <tbody>{this.renderMenuItem(menuItems)}</tbody>
        </table>
      </div>
    );
  }
}

const getMenuItems = gql`
  query($category: Category!) {
    menuItems(category: $category) {
      name
      price
    }
  }
`;

const createOrder = gql`
  mutation {
    createOrder {
      id
    }
  }
`;

const createOrderItem = gql`
  mutation addOrderItem(
    $name: String!
    $quantity: Int!
    $price: Float!
    $order: ID!
  ) {
    createOrderItem(
      data: { name: $name, quantity: $quantity, price: $price, order: $order }
    ) {
      id
    }
  }
`;

export default compose(
  graphql(getMenuItems, {
    options: props => ({
      variables: {
        category: props.match.params.category
      }
    })
  }),
  graphql(createOrder, { name: "createOrder" }),
  graphql(createOrderItem, { name: "addOrderItem" })
)(Menu);
