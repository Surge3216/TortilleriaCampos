import React, { Component } from "react";
import M from 'materialize-css/dist/js/materialize';
import './style.css'

export class Dropdown extends Component{

    componentDidMount()  {document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {});
      });
    };

    render(){
        return(
    <div>
        <div className="row">
            <div className="col 1">


    <ul className="collapsible">
    <li>
            <div className="collapsible-header head">
                <p className="orderName">New Order</p>
            </div>
            <div className="collapsible-body">
                <p className="orderDetails">Restaurant Name</p>
                <p className="orderDetails">Address</p>
                <p className="orderDetails">Due Date</p>
                <p className="orderDetails">order:</p>
                <a className="waves-effect waves-light btn" id="add-btn" >Done</a>
            </div>
        </li>
        
        <li>
            <div className="collapsible-header">
                <p className="orderName">New Order</p>
            </div>
            <div className="collapsible-body">
                <p className="orderDetails">Restaurant Name</p>
                <p className="orderDetails">Address</p>
                <p className="orderDetails">Due Date</p>
                <p className="orderDetails">order:</p>
                <a className="waves-effect waves-light btn" id="add-btn" >Done</a>
            </div>
        </li>

        <li>
            <div className="collapsible-header">
                <p className="orderName">New Order</p>
            </div>
            <div className="collapsible-body">
                <p className="orderDetails">Restaurant Name</p>
                <p className="orderDetails">Address</p>
                <p className="orderDetails">Due Date</p>
                <p className="orderDetails">order:</p>
                <a className="waves-effect waves-light btn" id="add-btn" >Done</a>
            </div>
        </li>
    </ul>
            </div>
        </div>
    </div>
        )
    }
}

export default Dropdown;