import React from 'react'
import Footer from './Footer'
import Map from './Map'
import SendMsg from './SendMsg'
import { Button,Card,Jumbotron,Container } from 'react-bootstrap';


function Contact () {
 
    return (
      <div>
       
         <Jumbotron>  
        <h2>CONTACT US</h2> 
              
            <ul class="breadcrumb"> 
            <li><a href="/components/Home">Home</a></li>
            <li>CONTACT US</li>
            </ul>
            </Jumbotron>
            <Map/>
            <br></br>
            <SendMsg/>
            <br></br>
      <Footer/>
      </div>
    );
  }

  export default Contact; 