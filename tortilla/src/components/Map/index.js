import React, { Component } from "react";
import "./style.css"
export class Map extends Component{
    render(){
        return(
            <div>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4462887412615!2d-111.91869208509424!3d40.752207943092486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f4e6029c759f%3A0x4cfabb890b3cf1f2!2sCampos%20Market!5e0!3m2!1sen!2sus!4v1620718499804!5m2!1sen!2sus" 
                className="map"
                width="500" 
                height="450" 
                allowfullscreen="" 
                loading="lazy">
                </iframe> 
            </div>
        )
    }
}

export default Map;