import React, {useState} from 'react'
import Row from '../components/Row/index'
import API from '../utils/API'

function NewClient() {
    const [clients, setClients] = useState({
        clientName: "",
        clientEmailAddress: "",
        clientNumber: 0,
        clientType: "",
        clientStreetAddress: "",
        clientCity: "",
        clientState: "",
        clientZip: 0,
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setClients({...clients,[name]:value})

    }

    const handleFormSubmit=(event)=>{
        event.preventDefault()
        API.saveClient(clients).then((res)=>console.log(res.data)).catch(err=> console.log(err))
    }

    return (
        <div>

            <Row/>                  
                    <div class="card-panel col l9 offset-l1 teal white">
                    <form className="" action="" method="POST" role="form">
                        <div className="row">
                        <div className=" input-field col l4 offset-l2">
                                <input onChange={handleInputChange} placeholder="Business Name" id="ClientName" name="clientName" type="text" class="validate "></input>
                            </div>
                            <div className=" input-field col l4 ">
                                <input onChange={handleInputChange}  placeholder="Email" id="clientEmailAddress" name="clientEmailAddress" type="text" class="validate "></input>
                            </div>
                            <div className=" input-field col l4 offset-l2">
                                <input onChange={handleInputChange} placeholder="Phone number" id="clientNumber" name="clientNumber" type="text" class="validate "/>
                            </div>
                            <div className=" input-field col l4 ">
                                <input onChange={handleInputChange} placeholder="Business type" id="clientType" name="clientType" type="text" class="validate "/>
                            </div>
                            <div className=" input-field col l4 offset-l2">
                                <input onChange={handleInputChange} placeholder="address" id="clientStreetAddress" name="clientStreetAddress" type="text" class="validate "/>
                            </div>
                            <div className=" input-field col l2 ">
                                <input onChange={handleInputChange} placeholder="City" name="clientCity" id="clientCity" type="text" class="validate "/>
                            </div>
                            <div className=" input-field col l1 ">
                                <input onChange={handleInputChange} placeholder="State" name="clientState" id="clientState" type="text" class="validate "/>
                            </div>
                            <div className=" input-field col l1 ">
                                <input onChange={handleInputChange} placeholder="Zip" name="clientZip" id="clientZip" type="text" class="validate "/>
                            </div>

                        </div>
                        <div className="row">
                            <div class="col l1 offset-l9">
                            <button onClick={()=> handleFormSubmit(clients)} class="waves-effect waves-light btn" id="add-btn" >Add</button>
                            </div>
                        </div>
                    </form>
                </div>         
        </div>
    );
};

export default NewClient;