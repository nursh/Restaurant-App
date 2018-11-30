import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import update from "immutability-helper";

import { updateOrder, fetchOrders } from "../Queries/OrderQueries";
import { removeOrderItem, updateOrderItem } from "../Queries/OrderItemQueries";
import Header from "./Header";

class Order extends Component {
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
          <button className="menu-table__body-button">-</button>
          <span className="menu-table__body-quantity__number">
            {item.quantity}
          </span>
          <button className="menu-table__body-button">+</button>
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

  proceedCheckout = total => async e => {
    await this.props.updateOrder({
      variables: {
        id: orderId,
        total
      }
    });
    this.props.history.push("/checkout");
  };

  render() {
    const { order } = this.props.data;
    const { error } = this.props.data;
    if (!order) return "Loading...";
    const total = order.items.reduce(
      (sum, item) => (sum += item.price * item.quantity),
      0
    );
    return (
      <div>
        <Header />
        <h2 className="order__title">Review Order</h2>
        {error || order.items.length === 0 ? (
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
            <button
              className="order__checkout"
              onClick={this.proceedCheckout(total)}
            >
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
  graphql(updateOrderItem, { name: "updateOrderItem" }),
  graphql(updateOrder, { name: "updateOrder" })
)(Order);
