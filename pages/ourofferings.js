import React from 'react';

import ReactPlayer from 'react-player'
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import Header3 from './Header3';

import Footer2 from './Footer2';

export default function gamiform() {

  return ( 
    
    <div className="main-div" style={{backgroundColor:'#f0f8ff'}}>
    <Header3></Header3>
    <Container fluid >
    <div class="mt-5">  
      <Image src="/Expertise.png" width="100%"></Image>
    </div>

    <Footer2></Footer2>
    </Container>
  
   </div>
  )
}
