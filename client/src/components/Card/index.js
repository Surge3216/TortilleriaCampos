import React, { Component } from "react";
import "./style.css";
import EmployeeContext from "../../utils/employeeContext"
export class Card extends Component{
    constructor(props){
        super(props);
        this.userName = React.createRef();
        
    }
    render(){
        return(
        <EmployeeContext.Consumer>
            {({handleLogin})=>(
                       <div class="row login">
                       <div class="col l4 s12 m9 offset-m2 offset-l5 border">
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
                                           <input placeholder="email" id="user_name" ref={this.userName} type="text" class="validate"></input>
                                       </div>
                                   </div>
                                   <div className="row">
                                       <div className=" input-field col l8 m8 s8 offset-l2 offset-m2 offset-s2">
                                           <input placeholder="password" id="user_password" type="text" class="validate "></input>
                                       </div>
                                   </div>
                                   <div className="row">
                                       <div className="center-align">
                                       <a class="waves-effect waves-light btn" onClick={()=>{handleLogin(this.userName.current.value)}}>Submit</a>
                                       </div>
                                   </div>
                               </form>
                               </div>
                           </div>
                       </div>
                   </div>
            )}
 
        </EmployeeContext.Consumer>
        )
    }
};
export default Card;