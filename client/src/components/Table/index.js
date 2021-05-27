import React, { Component } from "react";
import M from 'materialize-css/dist/js/materialize'
export class Table extends Component {
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {});
    });
  }

  render(){
      return(
  <div>

      <div className="row">
        <div className="col l4 offset-l2">
          <h3>New Order</h3>
        </div>
      </div>

      <div className="row">
      <div className="col l7 offset-l2">

          <table>
            <thead>
              <tr className="row">
                <th>Quantity</th>
                <th>Item Name</th>
                <th>Item description</th>
                <th>Price</th>
              </tr>
            </thead>

          <tbody>
            <tr>
              <td>7</td>
              <td>
                  <div className="input-field col s12">
                    <select>
                      <option value="" disabled selected>Choose your option</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                  </div>
              </td>                   
              <td>description</td>
              <td>$0.87</td>
            </tr>
                </tbody>
              </table>
            <div className="row">
              <div className="Col l1">
                < i className="material-icons">add</i>
              </div>

              <div className="col l2 offset-l10">
                <a className="waves-effect waves-light btn-small">Submit</a>
              </div>
            </div>
        </div>
      </div>
  </div>
      )
    }
};

export default Table;