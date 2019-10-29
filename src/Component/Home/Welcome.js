/*import React from 'react';
//import { Fade } from 'react-slideshow-image';
import {Carousel} from 'react-bootstrap'
import { useState } from 'react';
import {components} from './img/slide1.jpg';
console.log(components);
 
function Welcome() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slide1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slide2.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slide3.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default Welcome; */

import React, { Component } from 'react';
//import { Form,Col,Jumbotron,Container } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.css';
//import Carousel from 'react-bootstrap/Carousel'
//import { useState } from 'react';
import './Welcome.css';
import components from './img/welcome.jpg';
import Footer from './Footer'
console.log(components);

function Welcome(){
    return (
    <div>
      <div className="welcome">
        <div className="page-header header container-fluid">
         
                <div className="overlay"></div>
                <div className="description">
                    <h2 className="text-uppercase font-weight-bold">Welcome to the Southern Learnes !!</h2>
                </div>
                </div> 
      </div>          
                <Footer/>
    </div>           
    );
}
          
export default Welcome;          
        

