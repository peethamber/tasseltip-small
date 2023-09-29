import React from 'react';

import ReactPlayer from 'react-player'
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import Header3 from './Header3';
import Footer2 from './Footer2';


export default function gamiform() {

  return ( 
    
    <div className="main-div" style={{backgroundColor:"f0f8ff"}}>
    <Header3></Header3>
    <Container flex >
    <Card border="secondary" style={{fontFamily:"arial",fontSize:"19px",
    alignContent:'center',backgroundColor:"black",color:"white"}}>
    <div className="mt-5">
      <p></p>
     <Image src="/Overview.png" width="100%"></Image>
     <Image src="/Platform Overview.png" width="100%"></Image>
     <Image src="/Technology.png" width="100%"></Image>
     <Image src="/Why Gamiformation.png" width="100%"></Image>
    <p></p>
    <p>To know how we can help, get in touch at peethvt@tasseltip.com.
    </p>
    </div>
    </Card>
    <Footer2></Footer2>
    </Container>
  
   </div>
  )
}
