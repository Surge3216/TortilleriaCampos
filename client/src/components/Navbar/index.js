import React, { useContext } from "react";
import { UserContext } from "../../context/auth";
import "./style.css";
import { Link } from "react-router-dom";

export default function Navbar() {
const { user } = useContext(UserContext)
  return (
    <div>
      <ul className="sidenav panel sidenav-fixed">
        <li><div className="user-view">
          <div>
            <h5 className="center-align">Tortilleria Campos</h5>
          </div>

        </div></li>
        <li>
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/story"
                ? "nav-link active"
                : "nave-link"} >
            Story
          </Link>
        </li>

        {user === null ? <li>
          <Link
            to="/login"
          >
            Login
          </Link>
        </li>: null}
        <li>
          <Link
            to="/contact"
            className={
              window.location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"}>
            Contact Us
          </Link>
        </li>
        <li><div className="divider"></div></li>
        {user === null ? null : <li><a><span className="white-text name subheader nav-link">{user.username}
        </span></a></li>}
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
            className={window.location.pathname === "/order"
              ? "nav-link active"
              : "nav-link"}>
            New Order
          </Link>
        </li>
        <li>
          <Link
            to="/addUser"
            className={window.location.pathname === "/addUser"}>
            Add User
          </Link>
        </li>
      </ul>

    </div>
  )
}
