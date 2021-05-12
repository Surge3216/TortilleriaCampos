import React, { Component } from "react";
import "./style.css";

export class Card extends Component{
    render(){
        return(
        <div class="row login">
            <div class="col l6 s12 m9 offset-m2 offset-l4 border">
              <div class="card-panel teal white">
                    <div class="row">
                        <div>
                            <h4 className="center-align bold">Login</h4>
                        </div>
                    </div>
                    <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col l8 m8 s8 offset-l2 offset-m2 offset-s2">
                                <input placeholder="email" id="user_name" type="text" class="validate"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" input-field col l8 m8 s8 offset-l2 offset-m2 offset-s2">
                                <input placeholder="password" id="user_password" type="text" class="validate "></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="center-align">
                            <a class="waves-effect waves-light btn">Submit</a>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
};
export default Card;