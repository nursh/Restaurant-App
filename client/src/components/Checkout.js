import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { graphql, compose } from "react-apollo";
import axios from "axios";

import getTotal from "../utils/calculateTotal";
import { fetchOrders, updateOrder } from "../Queries/OrderQueries";
import Header from "./Header";

class Checkout extends Component {
  paid = false;

  handleToken = async token => {
    const total = getTotal(this.props.data.order);
    token.amount = total;
    const response = await axios.post("/api/stripe", token);
    this.paid = true;
  };

  onClosed = total => async e => {
    await this.props.updateOrder({
      variables: {
        id: window.localStorage.getItem("orderId"),
        total
      }
    });
    if (this.paid) {
      this.props.history.push("/menu");
      window.localStorage.removeItem("orderId");
    }
  };

  render() {
    const { order } = this.props.data;
    const { error } = this.props.data;
    const total = getTotal(order);
    const amount = total * 100;
    return (
      <div className="checkout">
        <Header />
        <div>
          <h2 className="checkout__title">Checkout</h2>
          {total === 0 || error ? (
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
          )}
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(fetchOrders, {
    options: props => ({
      variables: {
        id: window.localStorage.getItem("orderId")
      }
    })
  }),
  graphql(updateOrder, { name: "updateOrder" })
)(Checkout);
