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
    <Container flex >
    <Card border="secondary" style={{fontFamily:"Arial",fontSize:"19px",alignItems:'center'}}>
    <div className="mt-5">
  
    <p style={{fontWeight:"bold"}}>
    Strategy
    </p>
    <p>1. Retail Gamification</p>
    <p>2. DAO(Decentralized Autonomous Organization) Readiness Study</p>
    <p>3. Business Process Reengineering and Automation</p>

    <p style={{fontWeight:"bold"}}>
    Business Led Technology Transformation
    </p>
    
    <p>1. Enterprise Architecture</p>
    <p>2. Decentralized Applications (DApps)</p>
    <p>3. Metaverse</p>
    <p>4. Mobility</p>
    <p>5. Computer Vision</p>
    <p>6. Neural Networks</p>

    <p style={{fontWeight:"bold"}}>Industry Specialization</p>

    <p>1. Financial Services and Fintech</p>
    <p>2. Fashion</p>
    <p>3. Health Care</p>
    
   
   
    <p>Get in touch at peethvt@tasseltip.com </p>
    
    </div>
    </Card>
    <Footer2></Footer2>
    </Container>
  
   </div>
  )
}
