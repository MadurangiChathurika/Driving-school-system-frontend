import React, { Component } from 'react';
import {Jumbotron,Container,Form,Col} from 'react-bootstrap';

function SendMsg () {
 
    return (

        <div>
          <Container>
         
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label><h5>NAME</h5></Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label><h5>EMAIL</h5></Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label><h5>PHONE</h5></Form.Label>
                <Form.Control type="Phone" placeholder="Enter Phone" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label><h5>SERVICES</h5></Form.Label><br></br>
                <select type="services" placeholder="-----Select One-----" >
                <option value>-----Select One-----</option>
                <option value>Software Question</option>
                <option value>Need New Website</option>
                <option value>New School</option>
                <option value>Pricing Question</option>
                <option value>Other</option>
                </select>
              </Form.Group>
              </Form.Row>

              <Form.Row>

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label><h5>SUBJECT</h5></Form.Label>
                <Form.Control type="subject" placeholder="Enter subject" />
              </Form.Group>
              </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridComment">
                <Form.Label><h5>MESSEGE</h5></Form.Label>
                <div>
                <Form.Control type="messege" placeholder="Add a Messege " rows="3" />
                </div>
              </Form.Group>
            </Form.Row>
           <button className="btn btn-success" type="submit">Send Messge</button>
         </Form>
      
      </Container>
        </div>  

        );
    }
  
    export default SendMsg; 