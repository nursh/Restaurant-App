import React, { Component } from "react";
import Header from "./Header";
import StripeCheckout from "react-stripe-checkout";

export default class Checkout extends Component {
  handleToken = token => {
    console.log(token);
  };

  render() {
    return (
      <div>
        <Header />
        <h2>Checkout</h2>
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
          <button className="checkout__button">Pay</button>
        </StripeCheckout>
      </div>
    );
  }
}
