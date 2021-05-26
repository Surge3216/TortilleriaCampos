import React, { Component } from "react";
import "./style.css";

export class Footer extends Component {

    render(){
        return(
    <div>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l4 offset-l2 s12">
                <ul>
                  <li><a className="grey-text text-lighten-2" href="#!">contact us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </div>
        )
    }

}

export default Footer;