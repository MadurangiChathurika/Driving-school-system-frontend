import React, { component } from 'react';
import './Trainer.css';
import StuName from './StuName'
import Finish from './Finish'
import components from './img/trainer.jpg'
import Footer from './Footer'
console.log(components);

function Trainer() {
  
    return (
        
        <div >
        <div className="trainer">    
        <div className="container-fluid">
       
		<div className="overlay"></div>
		<div className="description">
			
			<h1 className="text-uppercase font-weight-bold">Welcome to the Southern 
            Learnes !!</h1>
		
			<p ></p>
			
        </div>	
        </div>
        </div>
		
		
        <br></br>
            <StuName/>
            <Finish/>
            <Footer/>
            </div>
            
        );
    }

    export default Trainer; 