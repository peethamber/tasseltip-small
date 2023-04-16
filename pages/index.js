import React from 'react';

import ReactPlayer from 'react-player'
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import Header3 from './Header3';
import Footer2 from './Footer2'


export default function Home() {
  
  return ( 
    
    <div className="mt-5">
    
    <Container flex style={{fontSize:"25px"}}>
    <Header3></Header3>
    <img className="d-block w-100" src="/techpic2.jpeg"></img>
    <div className = "mt-5">
    <img className="d-block w-100" src="/metaverse.jpg"></img>
    <a href="/video.html" style={{textDecoration:"none",color:"white",backgroundColor:'grey'}} target="_blank" >PLAY VIDEO</a>
    <img className="d-block w-100" src="/vr.jpg"></img>
    <a href="/onativideo.html" style={{textDecoration:"none",color:"white",backgroundColor:'grey'}} target="_blank" >PLAY VIDEO</a>
    <img className="d-block w-100" src="/gamify.jpg"></img>
    <a href="/gamevideo.html" style={{textDecoration:"none",color:"white",backgroundColor:'grey'}} target="_blank" >PLAY VIDEO</a>
    </div>
    <Footer2></Footer2>
            
    </Container>
  
   </div>
  )
}
