import { set } from "mongoose";
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Dropdown from "../components/Dropdown/index"

function DriversOrders() {
        const [driverOrders, setDriverOrders] = useState([
          {
            userID: 2,
            orderStatus:"our for delivery",
            dueDate: "5/27/2021",
            cornQuantity: 5,
            flourQuantity: 2,
            orderNotes: "Go to back door, and ask for Mary",
      
          },
        ]);
      
        useEffect(() => {
          let userID = 2;
          API.getOrder(userID).then((res) => {
            setDriverOrders(res.data);
          });
        }, []);
      
        return (
          <div>
              <Dropdown/>
            <div>
                
            {driverOrders.map(item => (
              <div key= {item.userID}>
                  {console.log(item)}
                <p> {item.userID}</p>
                <p>{item.orderStatus}</p>
                <p>{item.dueDate}</p>
                <p>{item.cornQuantity}</p>
                <p>{item.flourQuantity}</p>
                <p>{item.orderNotes}</p>  
              </div>
            ))}
          </div>
          </div>
        );
      }


export default DriversOrders;