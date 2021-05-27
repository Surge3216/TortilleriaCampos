import { set } from "mongoose";
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Dropdown from "../components/Dropdown/index"

function DriversOrders() {

  const [driverOrders, setDriverOrders] = useState([
    {
      userID: "Los Cucos",
      orderStatus: "Out for Delivery",
      dueDate: "5/25/2021",
      cornQuantity: 5,
      flourQuantity: 2,
      orderNotes: "Call Mary",

    },
    {
      userID1: "La Fountain",
      orderStatus: "filled",
      dueDate: "5/25/2021",
      cornQuantity: 4,
      flourQuantity: 6,
      orderNotes: "Call thomas",
    }]);




      // useEffect(() => {
      //   let userID = 0;
      //   API.getOrder(userID).then((res) => {
      //     setDriverOrders(res.data);
      //   });
      // }, []);

      return(
    <div>

    {
      driverOrders.map(item => (
        <div key={item.userID}>
          {console.log(item)}
          <div className="row">
            <div className=" col l8 offset-l2">
              <p> Restaurant Name: {item.userID}</p>
              <p>Status: {item.orderStatus}</p>
              <p>Due: {item.dueDate}</p>
              <p>Corn: {item.cornQuantity}</p>
              <p>Flower: {item.flourQuantity}</p>
              <p>Notes: {item.orderNotes}</p>
            </div>
          </div>


          <div className="row">
            <div className="col l5 offset-l2">
              <h4>Your Orders</h4>
              <ul className="collapsible">
                <li>


                  <div className="collapsible-header head">
                    <p className="hm"> Restaurant Name: {item.userID}</p>
                  </div>
                  <div className="collapsible-body">
                    <p>Status: {item.orderStatus}</p>
                    <p>Due: {item.dueDate}</p>
                    <p>Corn: {item.cornQuantity}</p>
                    <p>Flower: {item.flourQuantity}</p>
                    <p>Notes: {item.orderNotes}</p>
                    <a className="waves-effect waves-light btn" id="add-btn" >Done</a>
                  </div>
                </li>

                <li>


                  <div className="collapsible-header head">
                    <p className="hm"> Restaurant Name: La fountain</p>
                  </div>
                  <div className="collapsible-body">
                    <p>Status: out for delivery</p>
                    <p>Due: {item.dueDate}</p>
                    <p>Corn: 8</p>
                    <p>Flower: 6</p>
                    <p>Notes: Thomas will write you a check</p>
                    <a className="waves-effect waves-light btn" id="add-btn" >Done</a>
                  </div>
                </li>

                <li>


                  <div className="collapsible-header head">
                    <p className="hm"> Restaurant Name: La Frontera</p>
                  </div>
                  <div className="collapsible-body">
                    <p>Status: Staging</p>
                    <p>Due: {item.dueDate}</p>
                    <p>Corn: 8</p>
                    <p>Flower: 10</p>
                    <p>Notes: Call the Restaurant to let you in</p>
                    <a className="waves-effect waves-light btn" id="add-btn" >Done</a>
                  </div>
                </li>
              </ul>



            </div>
          </div>



        </div>

      ))
    }
    </div >
  );
}

export default DriversOrders
