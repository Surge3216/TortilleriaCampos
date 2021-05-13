import React, {useState, useEffect} from 'react'

export default function DriversOrders() {
    const [driverOrders, setDriverOrders]= useState([{
        userID:"MexMarket",
        orderNotes: "blah",
    }]);
    
    useEffect(() => {
        let tempArray = [{
            userID:"MexMarket",
            orderNotes: "blah",
        }]
        setDriverOrders(tempArray)
    },[])
   
    return (
        <div>        
          <h1>{driverOrders[0].userID}</h1> 
          <h1>{driverOrders[0].orderNotes}</h1>
        </div>
    )
}
