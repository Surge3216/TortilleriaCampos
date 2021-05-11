import React from 'react'
import Row from '../components/Row/index'

function Contact() {
    return (
        <div>
            <Row>
                <div className="col l3 offset-l3 m6 offset-m1">
                    <h5> Tortilla Campos</h5>
                    <h6>Email: tortilleriacampos@gmail.com</h6>
                    <h6>Phone: 801-347-8284</h6>
                    <h6>775 South 900 West</h6>
                    <h6>Salt Lake City, UT 84104</h6>
                </div>
                <div className="col l6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4462887412615!2d-111.91869208509424!3d40.752207943092486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f4e6029c759f%3A0x4cfabb890b3cf1f2!2sCampos%20Market!5e0!3m2!1sen!2sus!4v1620718499804!5m2!1sen!2sus" 
                width="500" 
                height="450" 
                allowfullscreen="" 
                loading="lazy"></iframe>
                </div>
            </Row>            
        </div>
    )
};

export default Contact;