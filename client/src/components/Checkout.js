import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { graphql, compose } from "react-apollo";


import getTotal from "../utils/calculateTotal";
import { fetchOrders, updateOrder } from "../Queries/OrderQueries";
import Header from "./Header";

class Checkout extends Component {
  handleToken = token => {
    console.log(token);
    window.localStorage.removeItem('orderId');
  };

  onClosed = total => async e => {
    await this.props.updateOrder({
      variables: {
        id: orderId,
        total
      }
    });
  };

  render() {
    const { order } = this.props.data;
    if (!order) return "Loading...";
    const total = getTotal(order);
    const amount = total * 100;
    return (
      <div className="checkout">
        <Header />
        <div>
          <h2 className="checkout__title">Checkout</h2>
          <table className="menu-table">
            <thead>
              <tr>
                <th className="menu-table__heading-items">ITEMS</th>
                <th className="menu-table__heading-quantity">QUANTITY</th>
                <th className="menu-table__heading-amount">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map(item => (
                <tr className="menu-table__body__row" key={item.id}>
                  <td className="menu-table__body-name">{item.name}</td>
                  <td className="menu-table__body-quantity">
                    <span className="menu-table__body-quantity__number">
                      {item.quantity}
                    </span>
                  </td>
                  <td className="menu-table__body-price">
                    &#8358;{item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td />
                <td className="menu-table__body-total">Total</td>
                <td className="menu-table__body-price">&#8358;{total}</td>
                <td />
              </tr>
            </tfoot>
          </table>
          <StripeCheckout
            name="Restaurant order"
            currency="NGN"
            billingAddress={false}
            zipCode={false}
            amount={amount}
            token={this.handleToken}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            closed={this.onClosed(total)}
            email=""
          >
            <button className="checkout__button">Pay now</button>
          </StripeCheckout>
        </div>
      </div>
    );
  }
}

const orderId = window.localStorage.getItem("orderId");
export default compose(
  graphql(fetchOrders, {
    options: props => ({
      variables: {
        id: orderId
      }
    })
  }),
  graphql(updateOrder, { name: "updateOrder" })
)(Checkout);
