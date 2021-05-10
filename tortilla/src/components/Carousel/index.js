import React, { Component } from "react";
import "./style.css";
import M from 'materialize-css/dist/js/materialize';

export class Carousel extends Component{
componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {});
    });
};
    render(){
        return(
            <div>
            <div className="container">
              <div class="carousel">
                <a class="carousel-item" href="#one!"><img src="https://pixabay.com/get/g2bba99bc34f6e22cbeab764c324b4686ddf4fb280d4cf275d3361f36672a692c0e106b6c97e262734a30c94bfe29080ffc565c62e786df683b103c24bd89b085_1920.jpg"/></a>
                <a class="carousel-item" href="#two!"><img src="https://pixabay.com/get/gb01d0b3e10d4f71da89edfdc6fa062c625d718709d9382f62cc75049b29c20505d228cad7bb6b3405318cea658a50f43.jpg"/></a>
                <a class="carousel-item" href="#three!"><img src="https://pixabay.com/get/ge0005b072a30347388075efb26091c0b24d286d10395f6634c126a6dd7a82058e58650dd8433da6f4c22bef9ac9ea8a6.jpg"/></a>
                <a class="carousel-item" href="#four!"><img src="https://pixabay.com/get/ge74bf9f47d66564a137c1a1b9966418ace9292024776b42c93fda53e3ea2155754d4ace1da1c07f021bef6efae39e732.jpg"/></a>
                <a class="carousel-item" href="#five!"><img src="https://pixabay.com/get/ga4b65c2051494a6d02c7b9071aa11dd359289c5b3c4db69f2d734e7bec472955610500729a7c56cb66fa732f08f3c524.jpg"/></a>
              </div>
            </div>
            </div>
        )
    }
};

export default Carousel;