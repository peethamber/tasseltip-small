import React from 'react';

import ReactPlayer from 'react-player'
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import Header3 from './Header3';
import Footer2 from './Footer2';


export default function AboutMe() {

  return ( 
    
    <div className="main-div"style={{backgroundColor:'black'}}>
    <Header3></Header3>
    <Container flex >
    <img className="img-fluid mx-auto d-block" src="NeilWoolerten.jpg" width="30%"/>
    <Card border="secondary" style={{fontFamily:"arial",
    fontSize:"19px",alignItems:'center',backgroundColor:'black',color:'white'}}>
    <div className="mt-5">
    <p>
     Neil sits on the board in the capacity of a Non-Executive Director.
     Neil Woolerton has twenty-five years of executive and 
     board-level experience in the technology & digital sectors 
     and brings with him a wealth of knowledge, skills, and 
     contacts to help guide us on the next stage of our journey.
     
     A former MD of Horsebridge Networks, a Director at BT Global Services,
      and now a NED/Board Advisor to several organisations across 
      the UK Neil’s specialism is in scale & growth which fits perfectly 
      with our overall strategy & vision.

     Neil lives in Nottingham with his wife and three children and is a passionate sports fan. 
    </p>
    
      </div>
    </Card>
    <Footer2></Footer2>
    </Container>
  
   </div>
  )
}
