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
    <Container flex style={{fontFamily:"arial",fontSize:"22px"}}>
    <Card border="secondary">
    <div className="mt-5">
    <p>
    Your business is a state machine and broadly exists in one of two states: 
    the Scene and Game state. The Scene state is static, and the Game state is dynamic.
     The Scene state is like freezing your business process's context and actors in time. It is the snapshot. The Game state, on the other hand, is in a constant state of motion. It is this state that defines the success or failure of a business. Therefore, While planning any transformation projects, it is highly critical to understand the distinction between these two states in your business and focus more on the Game State and the drivers for the desired changes. 
     </p>

    <p>To know how we can help, get in touch at peethvt@tasseltip.com.
    </p>
    </div>
    </Card>
    <Footer2></Footer2>
    </Container>
  
   </div>
  )
}
