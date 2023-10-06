import React from 'react';

import ReactPlayer from 'react-player'
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import Header3 from './Header3';
import Footer2 from './Footer2';


export default function PostsAndVideos() {

  return ( 
    
    <div className="main-div" style={{backgroundColor:"f0f8ff"}}>
    <Header3></Header3>
    <Container flex >
    <Card border="secondary" style={{fontFamily:"arial",fontSize:"19px",
    alignContent:'center',backgroundColor:"black",color:"white"}}>
    <div className="mt-5">
     
    <Image src="/post1.png" width="100%" ></Image>
    <Image src="/post2.png" width="100%" ></Image>
    <Image src="/post3.png" width="100%" ></Image>
    <Image src="/post4.png" width="100%" ></Image>
    <Image src="/post5.png" width="100%" ></Image>
    <Image src="/post6.png" width="100%" ></Image>
    <Image src="/post7.png" width="100%" ></Image>
    <Image src="/post8.png" width="100%" ></Image>
    <Image src="/post9.png" width="100%" ></Image>
    
    
    Your browser does not support the video tag.
   
    </div>
    <p>To know how we can help, get in touch at peethvt@tasseltip.com.
    </p>
   
    </Card>
    
    <Footer2></Footer2>
    </Container>
  
   </div>
  )
}
