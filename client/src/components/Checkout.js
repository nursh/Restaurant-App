import React, { Component } from "react";
import Header from "./Header";
import StripeCheckout from "react-stripe-checkout";

export default class Checkout extends Component {
  handleToken = token => {
    console.log(token);
  };

  render() {
    return (
      <div className="checkout">
        <Header />
        <div >
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
            <tr className="menu-table__body__row">
              <td className="menu-table__body-name">Rice and beans</td>
              <td className="menu-table__body-quantity">
                <span className="menu-table__body-quantity__number">0</span>
              </td>
              <td className="menu-table__body-price">&#8358;500</td>
            </tr>
            <tr>
              <td className="menu-table__body-name">Yam and Egg</td>
              <td className="menu-table__body-quantity">
                <span className="menu-table__body-quantity__number">0</span>
              </td>
              <td className="menu-table__body-price">&#8358;500</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td className="menu-table__body-total">Total</td>
              <td className="menu-table__body-price">&#8358;1000</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
          <StripeCheckout
            name="Restaurant order"
            currency="NGN"
            billingAddress={false}
            zipCode={false}
            amount={100000}
            token={this.handleToken}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            email=""
          >
            <button className="checkout__button">Pay now</button>
          </StripeCheckout>
        </div>
      </div>
    );
  }
}
