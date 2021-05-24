import React from 'react'
import Row from '../components/Row/index'

function NewClient() {
    return (
        <div>

            <Row/>                  
                    <div class="card-panel col l9 offset-l1 teal white">
                    <form className="" action="" method="POST" role="form">
                        <div className="row">
                        <div className=" input-field col l4 offset-l2">
                                <input placeholder="Business Name" id="ClientName" type="text" class="validate "></input>
                            </div>
                            <div className=" input-field col l4 ">
                                <input placeholder="Email" id="clientEmailAddress" type="text" class="validate "></input>
                            </div>
                            <div className=" input-field col l4 offset-l2">
                                <input placeholder="Phone number" id="clientNumber" type="text" class="validate "/>
                            </div>
                            <div className=" input-field col l4 ">
                                <input placeholder="Busness type" id="clientType" type="text" class="validate "/>
                            </div>
                            <div className=" input-field col l4 offset-l2">
                                <input placeholder="address" id="clientStreetAddress" type="text" class="validate "/>
                            </div>
                            <div className=" input-field col l2 ">
                                <input placeholder="City" id="clientCity" type="text" class="validate "/>
                            </div>
                            <div className=" input-field col l1 ">
                                <input placeholder="State" id="clientState" type="text" class="validate "/>
                            </div>
                            <div className=" input-field col l1 ">
                                <input placeholder="Zip" id="clientZip" type="text" class="validate "/>
                            </div>

                        </div>
                        <div className="row">
                            <div class="col l1 offset-l9">
                            <a class="waves-effect waves-light btn" id="add-btn" >Add</a>
                            </div>
                        </div>
                    </form>
                </div>         
        </div>
    );
};

export default NewClient;