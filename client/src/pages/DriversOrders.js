import { set } from "mongoose";
import React, { useState, useEffect } from "react";
import API from "../utils/API";

export default function DriversOrders() {
  const [driverOrders, setDriverOrders] = useState([
    {
      userID: 0,
      orderStatus:"",
      dueDate: "",
      cornQuantity: 0,
      flourQuantity: 0,
      orderNotes: "",

    },
  ]);

  useEffect(() => {
    let userID = "example";
    API.getOrder(userID).then((res) => {
      setDriverOrders(res.data);
    });
  }, []);

  return (
    <div>
      <h1>{driverOrders[0].userID}</h1>
      <h1>{driverOrders[0].orderStatus}</h1>
      <h1>{driverOrders[0].dueDate}</h1>
      <h1>{driverOrders[0].cornQuantity}</h1>
      <h1>{driverOrders[0].flourQuantity}</h1>
      <h1>{driverOrders[0].orderNotes}</h1>
    </div>
  );
}