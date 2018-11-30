import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import update from "immutability-helper";


import { createOrder } from '../Queries/OrderQueries';
import { createOrderItem } from '../Queries/OrderItemQueries';
import { getMenuItems } from '../Queries/MenuItemQueries';
import { getCategoryName } from '../utils/getUniqueCategories';
import Header from "./Header";

const getOrderId = () => window.localStorage.getItem("orderId");

class Menu extends Component {
  menuState = {
    items: []
  };

  addQuantity = order => e => {
    const itemIndex = this.menuState.items.findIndex(
      item => item.name === order.name
    );
    const newState = update(this.menuState, {
      items: {
        [itemIndex]: {
          quantity: {
            $apply: x => (x += 1)
          }
        }
      }
    });
    this.menuState = newState;
    this.forceUpdate();
  };

  reduceQuantity = order => e => {
    const itemIndex = this.menuState.items.findIndex(
      item => item.name === order.name
    );
    const newState = update(this.menuState, {
      items: {
        [itemIndex]: {
          quantity: {
            $apply: x => {
              x -= 1;
              return x < 1 ? 0 : x;
            }
          }
        }
      }
    });
    this.menuState = newState;
    this.forceUpdate();
  };

  addToOrder = item => async e => {
    const { name, quantity, price } = item;
    let orderId = getOrderId();
    let createdOrder;
    if (!orderId) {
      const newOrder = await this.props.createOrder();
      const { createOrder } = newOrder.data;
      createdOrder = createOrder.id;
      window.localStorage.setItem("orderId", createdOrder);
      orderId = getOrderId();
    }
    if (item.quantity > 0) {
      await this.props.addOrderItem({
        variables: {
          name,
          quantity,
          price,
          order: orderId
        }
      });
    }
  };

  addItemToState = ({ name, price }) => {
    const orderItem = {
      name,
      price,
      quantity: 0
    };
    this.menuState.items.push(orderItem);
    return orderItem;
  };

  renderMenuItem = menuItems => {
    const itemRows = menuItems.map(item => (
      <tr className="menu-table__body__row" key={item.name}>
        <td className="menu-table__body-name">{item.name}</td>
        <td className="menu-table__body-quantity">
          <button
            className="menu-table__body-button"
            onClick={this.reduceQuantity(item)}
          >
            -
          </button>
          <span className="menu-table__body-quantity__number">
            {item.quantity}
          </span>
          <button
            className="menu-table__body-button"
            onClick={this.addQuantity(item)}
          >
            +
          </button>
        </td>
        <td className="menu-table__body-price">&#8358;{item.price}</td>
        <td className="menu-table__body-order">
          <button
            className="menu-table__body-order__button"
            onClick={this.addToOrder(item)}
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
    let menuRows;
    if (!menuItems) return "Loading...";
    if (this.menuState.items.length !== 0) {
      menuRows = this.menuState.items;
    } else {
      menuRows = menuItems.map(item => this.addItemToState(item));
    }
    return (
      <div>
        <Header />
        <h2 className="menu__title">{getCategoryName(this.props.match.params.category)}</h2>
        <table className="menu-table">
          <thead>
            <tr>
              <th className="menu-table__heading-items">ITEMS</th>
              <th className="menu-table__heading-quantity">QUANTITY</th>
              <th className="menu-table__heading-amount">AMOUNT</th>
              <th className="menu-table__heading-order" />
            </tr>
          </thead>
          <tbody>{this.renderMenuItem(menuRows)}</tbody>
        </table>
      </div>
    );
  }
}





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
