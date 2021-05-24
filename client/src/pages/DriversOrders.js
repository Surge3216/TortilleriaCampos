import React, {useState, useEffect} from 'react'
import Dropdown from '../components/Dropdown/index'

function DriversOrders(){
    return(
        <div>
            
            <div className="row">
                <h3 className="col l3 offset-l2">Your orders</h3>
            </div>
            <Dropdown />
        </div>
    )
}

export default DriversOrders;
// export default function DriversOrders() {
//     const [driverOrders, setDriverOrders]= useState([{
//         userID:"MexMarket",
//         orderNotes: "blah",
//     }]);
    
//     useEffect(() => {
//         let tempArray = [{
//             userID:"MexMarket",
//             orderNotes: "blah",
//         }]
//         setDriverOrders(tempArray)
//     },[])
   
//     return (
//         <div>        
//           <h1>{driverOrders[0].userID}</h1> 
//           <h1>{driverOrders[0].orderNotes}</h1>
//         </div>
//     )
// }