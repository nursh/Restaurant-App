import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ITEMS</th>
              <th>QUANTITY</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rice and beans</td>
              <td>
                <button>-</button>
                  <span>0</span>
                <button>+</button>
              </td>
              <td>
                &#8358;500
              </td>
            </tr>
          </tbody>

        </table>


 
      </div>
    );
  }
}

export default Menu;
