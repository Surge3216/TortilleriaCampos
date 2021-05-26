import React, { Component } from "react";
import m from 'materialize-css/dist/js/materialize'
export class Table2 extends Component {
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
          <h3>Deliveries</h3>
        </div>
      </div>

      <div className="row">
      <div className="col l7 offset-l2">

          <table>
            <thead>
              <tr className="row">
                <th>Restaurant Name</th>
                <th>Case count</th>
                <th>address</th>
              </tr>
            </thead>

          <tbody>
            <tr>
              <td>Los Cucos</td>
              <td>32</td>
              <td>
                775 south 900 west, salt Lake city UT
              </td>                   
            </tr>
            <tr>
              <td>Los Cucos</td>
              <td>32</td>
              <td>
                775 south 900 west, salt Lake city UT
              </td>                   
            </tr>
            <tr>
              <td>Los Cucos</td>
              <td>32</td>
              <td>
                775 south 900 west, salt Lake city UT
              </td>                   
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

export default Table2;