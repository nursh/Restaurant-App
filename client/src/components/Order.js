import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import Header from './Header';

class Order extends Component {

  removeFromOrder = (itemId) => async (e) => {
    await this.props.removeItem({
      variables: {
        id: itemId
      }
    });
    this.props.data.refetch();
    this.forceUpdate();
  }

  renderOrderItems = (orderItems) => {
    const rows = orderItems.map(item => (
      <tr className="menu-table__body__row" key={item.name}>
        <td className="menu-table__body-name">{item.name}</td>
        <td className="menu-table__body-quantity">
          <button className="menu-table__body-button">-</button>
          <span className="menu-table__body-quantity__number">{item.quantity}</span>
          <button className="menu-table__body-button">+</button>
        </td>
        <td className="menu-table__body-price">&#8358;{item.price * item.quantity}</td>
        <td className="menu-table__body-order">
          <button className="menu-table__body-order__button" onClick={this.removeFromOrder(item.id)}>
            Remove item(s)
          </button>
        </td>
      </tr>
      )
    );

    return rows;
  }


  render() {
    const { order } = this.props.data;
    const { error } = this.props.data;
    if (error) return 'An order does not exist yet';
    if (!order) return 'Loading...';
    return (
      <div>
      <Header />
      <h2 className="order__title">Review Order</h2>
      <table className="menu-table">
        <thead>
          <tr>
            <th className="menu-table__heading-items">ITEMS</th>
            <th className="menu-table__heading-quantity">QUANTITY</th>
            <th className="menu-table__heading-amount">AMOUNT</th>
            <th className="menu-table__heading-order"></th>
          </tr>
        </thead>
        <tbody>
          {this.renderOrderItems(order.items)}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td className="menu-table__body-total">Total</td>
            <td className="menu-table__body-price">
              &#8358;{order.items.reduce((sum, item) => sum += (item.price * item.quantity), 0)}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
    );
  }
}

const fetchOrders = gql`
  query($id: ID!) {
    order(id: $id) {
      items {
        id
        name
        price
        quantity
      }
      total
    }
  }
`;

const removeOrderItem = gql`
  mutation($id: ID!) {
    deleteOrderItem(id: $id) {
      id
    }
  }
`;

const orderId = window.localStorage.getItem("orderId");
export default compose(
  graphql(fetchOrders, {
    options: () => ({
      variables: {
        id: orderId
      }
    })
  }),
  graphql(removeOrderItem, { name: 'removeItem' })
)(Order);