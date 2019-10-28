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
//import Footer from './Home/components/Footer'
console.log(components);

function Welcome(){
    return (
    <div>
        <header className="page-header header container-fluid">
                <div className="overlay"></div>
                <div className="description">
                    
                    <h1 className="text-uppercase font-weight-bold">Welcome to the Southern Learnes !!</h1>
                
                    <p > We are the leading driving school in Sri Lanka catering for both 
                      Local and International driving licenses. We are known in the community
                       since 1966 for creating professional and discipline drivers. We treat
                        all our customers with the highest priority and try to deliver our 
                        pupils "a fun to drive approach to drive". It is our mission to 
                        deliver this through our highly trained professional instructors with 
                        the modern day training program packages backed up with a brand new 
                        fleet of vehicles. We at Daya Learners believe that Driving License is 
                        a lifetime investment. This investment has to be achieved by the 
                        guidance of professional's. Achieving this training from unprofessional
                         people will put your life as well as other's lives and your vehicle at
                          enormous risk. </p>
                    
                    </div>
                </header> 
                
     
           <footer className="page-footer">
           <div className="container">
               <div className="row">
                   <div className="col-lg-8 col-md-8 col-sm-12">
                         <h6 className="text-uppercase font-weight-bold">
                          Southern Learnes</h6>
                         <h5>QUICK LINKS</h5>
                             <a href="#home">HOME</a><br></br>
                           <a href="why">WHY</a><br></br>
                           <a href="faq">FAQ</a><br></br>
                           <a href="student">STUDENT PORTAL</a><br></br>
                           <a href="contact">CONTACT</a><br></br>
                           <a href="about">ABOUT</a>
                           
                   </div>
           
                   <div className="col-lg-4 col-md-4 col-sm-12">
                         <h6 className="text-uppercase font-weight-bold">Contact</h6>
                         <p>35, UCSC, Reid Avenue, Colombo 7
                         <br/>info@Group39website.com
                         <br/>+ 01 234 567 88
                         <br/>+ 01 234 567 89</p>
                   </div>
               </div>
           <div className="footer-copyright text-center">© 2019 Copyright:
               Group39Website.com</div>
           </div>
       </footer>
               
           </div> 
          
            );
        }
        

export default Welcome;