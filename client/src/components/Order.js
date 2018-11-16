import React, { Component } from 'react';
import Header from './Header';

export default class Order extends Component {

  render() {
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
          <tr className="menu-table__body__row">
            <td className="menu-table__body-name">Rice and beans</td>
            <td className="menu-table__body-quantity">
              <button className="menu-table__body-button">-</button>
              <span className="menu-table__body-quantity__number">0</span>
              <button className="menu-table__body-button">+</button>
            </td>
            <td className="menu-table__body-price">&#8358;500</td>
            <td className="menu-table__body-order">
              <button className="menu-table__body-order__button">
                Remove item(s)
              </button>
            </td>
          </tr>
          <tr>
            <td className="menu-table__body-name">Yam and Egg</td>
            <td className="menu-table__body-quantity">
              <button className="menu-table__body-button">-</button>
              <span className="menu-table__body-quantity__number">0</span>
              <button className="menu-table__body-button">+</button>
            </td>
            <td className="menu-table__body-price">&#8358;500</td>
            <td className="menu-table__body-order">
              <button className="menu-table__body-order__button">
                Remove item(s)
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
    );
  }
}