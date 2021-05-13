import React, { Component } from "react";
import "./style.css";

export class Footer extends Component {

    render(){
        return(
    <div>
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l4 offset-l2 s12">
                <ul>
                  <li><a class="grey-text text-lighten-2" href="#!">contact us</a></li>
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