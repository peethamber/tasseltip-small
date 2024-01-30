import React from 'react';
import {useState,useEffect} from 'react'
import ReactPlayer from 'react-player'
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import Header4 from './Header4';


export default function PostsAndVideos() {
const url = ""
const [domLoaded, setDomLoaded] = useState(false);

useEffect(() => {
  setDomLoaded(true);
}, []);
  return ( 
    
    <div style={{backgroundColor:"black",color:'white'}}>
    <Header4></Header4>
    <Container flex >
   
    <Card style={{backgroundColor:'black'}}>
 
      <Row>
     
        <Col>
      
       {domLoaded?<ReactPlayer
              url="https://youtu.be/2nikZcsanFY" 
                
               
                width="100%"
                height="100%"
                controls="true"
                />:''}
     
        </Col>
        <Col>
          <img src="/Tasselland-Sidenote.png" width={"100%"}></img>
        </Col>
      </Row> 
  
     </Card>
    
  
    </Container>
  
   </div>
  )
}
