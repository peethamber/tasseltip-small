import React from 'react';

import ReactPlayer from 'react-player'
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import Header3 from './Header3';
import Footer2 from './Footer2'


export default function Home() {
  
  return ( 
    
    <div style={{backgroundColor:"black"}}>
    <Header3></Header3>
    <Container fluid>
    <p style={{color:"white",font:"arial-narrow",fontSize:"18px"}}>
    Gamiform Experiences for Online Business
    </p>
    <a href="whygamiform"><img className="d-block w-100" src="/gaming2.jpeg"></img></a>
    <a style={{textDecoration:"none",color:"white",backgroundColor:'blue'}} href="/gamevideo.html">PLAY VIDEO </a>
    <p style={{color:'grey'}}>Best Viewed in Portrait on Mobile</p>

    <p style={{color:"white",font:"arial-narrow",fontSize:"18px"}}>
    Mixed Reality in In-Store and Online Shopping
    </p>
    
    <a href="whygamiform"><img className="d-block w-100" src="/ar.webp" ></img></a>

    <p style={{color:"white",font:"arial-narrow",fontSize:"18px"}}>
    AI powered Product Recommenders for In-Store and Online Shopping
    </p>
    <a href="whygamiform"><img  className="d-block w-100"  src="/fashionreco.jpg"></img></a>
   

   
    {/* <a href="whygamiform"><img  className="d-block w-100"  src="/techpic2.jpeg"></img></a> */}
    
    <p style={{color:"white",font:"arial-narrow",fontSize:"18px"}}>
    We are building out our own Metaverse, TasselLand. 
    </p>
    <img className="d-block w-100" src="/metaverse.jpg"></img>
   
    <a style={{textDecoration:"none",color:"white",backgroundColor:'blue'}} href="/video.html">PLAY VIDEO</a>
    <p style={{color:'grey'}}>Best Viewed in Landscape on Mobile</p>
    
    <p style={{color:"white",font:"arial-narrow",fontSize:"20px"}}>
    Immersive Experience in Fashion
    </p>
    <img className="d-block w-100" src="/vr2.jpg"></img>
    <a style={{textDecoration:"none",color:"white",backgroundColor:'blue'}} href="/onativideo.html">PLAY VIDEO </a>
    <p style={{color:'grey'}}>Best Viewed in Landscape on Mobile</p>

   
    
    <Footer2></Footer2>
            
    </Container>
  
   </div>
  )
}
