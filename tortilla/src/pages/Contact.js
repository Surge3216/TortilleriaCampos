import React from 'react'
import Row from '../components/Row/index'
import Map from '../components/Map/index'

function Contact() {
    return (
        <div>
            <Row>
                <div className="col l4 offset-l2 m6 offset-m1">
                    <h5> Tortilleria Campos</h5>
                    <h6>Email: tortilleriacampos@gmail.com</h6>
                    <h6>Phone: 801-347-8284</h6>
                    <h6>775 South 900 West</h6>
                    <h6>Salt Lake City, UT 84104</h6>
                    <div class="card-panel teal white">
                    <Row>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col l10 m8 s8 ">
                                <input placeholder="Name" id="name" type="text" class="validate"></input>
                            </div>
                            <div className=" input-field col l10 m8 s8">
                                <input placeholder="Email" id="Email" type="text" class="validate "></input>
                            </div>
                            <div className=" input-field col l10 m8 s8">
                                <input placeholder="Subject" id="Subject" type="text" class="validate "></input>
                            </div>
                            <div className=" input-field col l12 m8 s8">
                                <textarea id="Message" type="text" class="validate "/>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className=" input-field col l8 m8 s8">
                                <input placeholder="password" id="user_password" type="text" class="validate "></input>
                            </div>
                        </div> */}
                        <div className="row">
                            <div class="col">
                            <a class="waves-effect waves-light btn">Send</a>
                            </div>
                        </div>
                    </form>
                    </Row>
                </div>
                </div>
                <div className="col l5">
                    <Map />
                </div>
            </Row>            
        </div>
    );
};

export default Contact;