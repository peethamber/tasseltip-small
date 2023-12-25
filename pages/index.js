import React from 'react';

import ReactPlayer from 'react-player'
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import Header3 from './Header3';
import Footer2 from './Footer2'


export default function Home() {
  
  return ( 
    
    <div style={{backgroundColor:"#f0f8ff"}}>
    <Header3></Header3>
    
    <Container fluid>
    <p></p>
   
             <div>
               <video src="/training.mp4" width="100%"></video>
               <Image src="/Home.png" width="100%" ></Image>
               <Image src="/tm.png" width="100%" ></Image>
               <Image src="/About.png" width="100%" ></Image>
               <Image src="/Services.png" width="100%" ></Image>
              
               <Image src="/Contact.png" width="100%" ></Image>
               
               </div>
             
    
    </Container>
    <div className="mt-5">
    <Footer2></Footer2>
    </div>
   </div>
  
   
  )
}

