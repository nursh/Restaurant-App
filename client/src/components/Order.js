import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import { fetchOrders } from "../Queries/OrderQueries";
import { removeOrderItem, updateOrderItem } from "../Queries/OrderItemQueries";
import getTotal from "../utils/calculateTotal";
import Header from "./Header";

class Order extends Component {
  menuState = {
    items: []
  };

  addQuantity = item => async e => {
    const newQuantity = item.quantity + 1;
    await this.props.updateItem({
      variables: {
        id: item.id,
        quantity: newQuantity
      }
    });
    this.props.data.refetch();
  };

  reduceQuantity = item => async e => {
    const newQuantity = item.quantity - 1;
    if (newQuantity === 0) {
      await this.props.removeItem({
        variables: {
          id: item.id
        }
      });
    } else {
      await this.props.updateItem({
        variables: {
          id: item.id,
          quantity: newQuantity
        }
      });
    }
    this.props.data.refetch();
  };

  removeFromOrder = itemId => async e => {
    await this.props.removeItem({
      variables: {
        id: itemId
      }
    });
    this.props.data.refetch();
    this.forceUpdate();
  };

  renderOrderItems = orderItems => {
    const rows = orderItems.map(item => (
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
        <td className="menu-table__body-price">
          &#8358;{item.price * item.quantity}
        </td>
        <td className="menu-table__body-order">
          <button
            className="menu-table__body-order__button"
            onClick={this.removeFromOrder(item.id)}
          >
            Remove item(s)
          </button>
        </td>
      </tr>
    ));

    return rows;
  };

  proceedCheckout = () => {
    this.props.history.push("/checkout");
  };

  render() {
    const { order } = this.props.data;
    const { error } = this.props.data;
    const total = getTotal(order);
    return (
      <div>
        <Header />
        <h2 className="order__title">Review Order</h2>
        {error || total === 0 ? (
          <h2 className="order__error">
            No item(s) have been added to the order
          </h2>
        ) : (
          <div>
            <table className="menu-table">
              <thead>
                <tr>
                  <th className="menu-table__heading-items">ITEMS</th>
                  <th className="menu-table__heading-quantity">QUANTITY</th>
                  <th className="menu-table__heading-amount">AMOUNT</th>
                  <th className="menu-table__heading-order" />
                </tr>
              </thead>
              <tbody>{this.renderOrderItems(order.items)}</tbody>
              <tfoot>
                <tr>
                  <td />
                  <td className="menu-table__body-total">Total</td>
                  <td className="menu-table__body-price">
                    &#8358;
                    {total}
                  </td>
                  <td />
                </tr>
              </tfoot>
            </table>
            <button className="order__checkout" onClick={this.proceedCheckout}>
              Proceed to checkout
            </button>
          </div>
        )}
      </div>
    );
  }
}

const orderId = window.localStorage.getItem("orderId");
export default compose(
  graphql(fetchOrders, {
    options: () => ({
      variables: {
        id: orderId
      }
    })
  }),
  graphql(removeOrderItem, { name: "removeItem" }),
  graphql(updateOrderItem, { name: "updateItem" })
)(Order);
