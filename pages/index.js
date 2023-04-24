import React from 'react';

import ReactPlayer from 'react-player'
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import Header3 from './Header3';
import Footer2 from './Footer2'


export default function Home() {
  
  return ( 
    
    <div style={{backgroundColor:"blanchedalmond"}}>
    <Header3></Header3>
    <Container flex>
    <a href="whygamiform"><img className="d-block w-100" src="/Gamify4.jpg"></img></a>
    <a style={{textDecoration:"none",color:"white",backgroundColor:'grey'}} href="/gamevideo.html">PLAY VIDEO </a>
   
    <p style={{color:'grey'}}>Best Viewed in Portrait on Mobile</p>
    <a href="whygamiform"><img  className="d-block w-100"  src="/techpic2.jpeg"></img></a>
    <div >
    <img className="d-block w-100" src="/metaverse.jpg"></img>
   
    <a style={{textDecoration:"none",color:"white",backgroundColor:'grey'}} href="/video.html">PLAY VIDEO</a>
    <p style={{color:'grey'}}>Best Viewed in Landscape on Mobile</p>
    

    <img className="d-block w-100" src="/vr2.jpg"></img>
    <a style={{textDecoration:"none",color:"white",backgroundColor:'grey'}} href="/onativideo.html">PLAY VIDEO </a>
    <p style={{color:'grey'}}>Best Viewed in Landscape on Mobile</p>

   
    </div>
    <Footer2></Footer2>
            
    </Container>
  
   </div>
  )
}
