import React from 'react';

import ReactPlayer from 'react-player'
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import Header3 from './Header3';
import Footer2 from './Footer2';


export default function gamiform() {

  return ( 
    
    <div className="main-div">
    <Header3></Header3>
    <Container flex style={{fontFamily:"arial",fontSize:"30px"}}>
    <Card border="secondary">
    <div className="mt-5">
    <p>
    When done strategically, gamification in the workplace can help improve business results in various ways, which include:
    </p>
    
    <p>1. Increasing adoption and use of learning management tools.</p>
    <p>2. Promoting retention and results in employees.</p>
    <p>3. Increasing employee knowledge sharing to improve service levels.</p>
    <p>4. Boosting call center employee performance and satisfaction.</p>

    <p>Overall, gamification in the workplace can increase employee motivation</p>

   
   
    <p>Get in touch at peethvt@tasseltip.com to understand 
      how we can help you acheive this.</p>
    </div>
    </Card>
    <Footer2></Footer2>
    </Container>
  
   </div>
  )
}
