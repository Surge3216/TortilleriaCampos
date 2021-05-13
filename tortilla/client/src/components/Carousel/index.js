import React, { Component } from "react";
import "./style.css";
import M from 'materialize-css/dist/js/materialize';
import image from "./Tortillas_de_maiz_blanco_(México)_01 (1).jpg";
import Row from "../Row/index"

export class Carousel extends Component{
componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {});
      });
    var instance = M.Carousel.init({
        fullWidth: false,
        indicators: true
      });
};
    render(){
        return(
  <div>
    <div class="carousel carousel-slider center">
    <img class="carousel-item mainImg" src={image} href="#four!">
    </img>
  </div>
            </div>
        )
    }
};

export default Carousel;