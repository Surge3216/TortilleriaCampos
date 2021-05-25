import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom"
import M from 'materialize-css/dist/js/materialize';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item


export class Navbar extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
  };

  render(){
    return(
  <div>
  {/* <nav class="bar">
    <div class="nav-wrapper">

    <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>

      <div className="container">

        <a href="#" class="brand-logo">Tortilleria Campos</a>
      
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link 
              to="/" 
              className = {
              window.location.pathname === "/" || window.location.pathname === "/story"
              ? "nav-link active"
               : "nave-link"} >
                 Story
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className = {
              window.location.pathname === "/login" 
              ? "nav-link active" 
              : "nav-link"}>
                Login
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className = {
                window.location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"}>
                  Contact Us               
            </Link>
           </li>
        </ul>
      </div>
    </div>
  </nav> */}

  <ul id="nav-mobile" className="sidenav panel sidenav-fixed">
    <li><div className="user-view">
      <div>
        <h5 className="center-align">Tortilleria Campos</h5>
      </div>

    </div></li>
            <li>
            <Link 
              to="/" 
              className = {
              window.location.pathname === "/" || window.location.pathname === "/story"
              ? "nav-link active"
               : "nave-link"} >
                 Story
            </Link>
            </li>
            <li>
            <Link 
              to="/login" 
              className = {
              window.location.pathname === "/login" 
              ? "nav-link active" 
              : "nav-link"}>
                Login
            </Link>
          </li>
            <li>
            <Link
              to="/contact"
              className = {
                window.location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"}>
                  Contact Us               
            </Link>
           </li>
    <li><div className="divider"></div></li>
    <li><a href="#name"><span className="white-text name subheader">User Name</span></a></li>
    <li><a className="waves-effect" href="#!">Main Page</a></li>
    <li>
      <Link
          to="/driverorders"
          className={window.location.pathname === "/driverorders"
          ? "nav-link active"
          : "nav-link"}>
            Deliveries Out
        </Link>
      </li>

      <li>
        <Link 
        to="/newclient"
        className={window.location.pathname === "/newclient"
        ? "nav-link active"
        : "nav-link"}>
          New Client
        </Link>
      </li>
      
      <li>
        <Link
            to="/order"
            className={window.location.pathname === "/clientorder"
            ? "nav-link active"
            : "nav-link"}>
              New Order
        </Link>
      </li>
    <li><a className="waves-effect" href="#!">Add User</a></li>
  </ul>

      </div>
    )
  }
}


export default Navbar;
