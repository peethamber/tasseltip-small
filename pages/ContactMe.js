import React from 'react';

import ReactPlayer from 'react-player'
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import Header3 from './Header3';



export default function ContactMe() {

  return ( 
    
    <div className="main-div" style={{backgroundColor:'black',color:'white'}}>
    <Header3></Header3>
    <Container flex style={{fontFamily:"arial-narrow",fontSize:"22px"}}>
    
    <p>
    Reach me at +44 (0) 7557764276 or at peethvt@tasseltip.com
    </p>
    </Container>
  
   </div>
  )
}
