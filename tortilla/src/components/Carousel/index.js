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
    <div class="carousel-item red white-text" href="#one!">
      <h2>First Panel</h2>
      <p class="white-text">This is your first panel</p>
    </div>
    <div class="carousel-item amber white-text" href="#two!">
      <h2>Second Panel</h2>
      <p class="white-text">This is your second panel</p>
    </div>
    <div class="carousel-item green white-text" href="#three!">
      <h2>Third Panel</h2>
      <p class="white-text">This is your third panel</p>
    </div>
    <img class="carousel-item" src={image} href="#four!">
    </img>
  </div>
            </div>
        )
    }
};

export default Carousel;