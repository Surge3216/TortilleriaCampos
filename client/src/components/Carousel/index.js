import React, { Component } from "react";
import "./style.css";
import M from 'materialize-css/dist/js/materialize';
import image from "./Tortillas_de_maiz_blanco_(México)_01 (1).jpg";
import Row from "../Row/index"

export class Carousel extends Component{

    render(){
        return(
  <div>
    <div class="row">
      <div className="box col l11">
    <img class="col mImg" src={image} href="#four!">
    </img>
    </div>
  </div>
            </div>
        )
    }
};

export default Carousel;