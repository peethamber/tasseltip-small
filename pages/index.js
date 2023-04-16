import React from 'react';

import ReactPlayer from 'react-player'
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import Header3 from './Header3';
import Footer2 from './Footer2'


export default function Home() {
  
  return ( 
    
    <div className="mt-5">
    
    <Container flex style={{fontSize:"17px"}}>
    <Header3></Header3>
    <img className="d-block w-100" src="/techpic2.jpeg"></img>
    <div className = "mt-5">
    <img className="d-block w-100" src="/metaverse.jpg"></img>
    <a style={{textDecoration:"none",color:"white",backgroundColor:'black'}} href="/video.html"  target="_blank" >PLAY VIDEO</a>
    <p style={{backgroundColor:'grey',color:'white'}}>Best Viewed in Landscape on Mobile</p>
    
    <img className="d-block w-100" src="/vr2.jpg"></img>
    <a style={{textDecoration:"none",color:"white",backgroundColor:'black'}} href="/onativideo.html"  target="_blank" >PLAY VIDEO </a>
    <p style={{backgroundColor:'grey',color:'white'}}>Best Viewed in Landscape on Mobile</p>

    <img className="d-block w-100" src="/gamify.jpg"></img>
    <a style={{textDecoration:"none",color:"white",backgroundColor:'black'}} href="/gamevideo.html"  target="_blank" >PLAY VIDEO </a>
    <p style={{backgroundColor:'grey',color:'white'}}>Best Viewed in Portrait on Mobile</p>
    </div>
    <Footer2></Footer2>
            
    </Container>
  
   </div>
  )
}
