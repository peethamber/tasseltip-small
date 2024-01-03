import React from 'react';


import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import Header3 from './Header3';
import Footer2 from './Footer2'
import ReactPlayer from 'react-player'
import {useState,useEffect} from 'react'

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return ( 
    
    <div style={{backgroundColor:"#f0f8ff"}}>
   

              <Container flex>
              <Header3></Header3>
              <p></p>
             <h4 align="center">T A S S E L L A N D & Sustainability</h4>
              <p></p>
              <div>{domLoaded?<ReactPlayer
              url="https://youtu.be/2nikZcsanFY" 
                
                playing="false"
                width="100%"
                height="70vh"
                controls="true"
                />:''}</div>
                <p></p>
                  <Image src="/esg.png" width="100%" ></Image>
                  <p></p>
              <Image src="/Home.png" width="100%" ></Image>
              <h4 align="center">T A S S E L L A N D - TEASER</h4>
              <div>{domLoaded?<ReactPlayer
              url="https://youtu.be/Cg1U3SkSWpU" 
                
                playing="false"
                width="100%"
                height="70vh"
                controls="true"
                />:''}</div>
                <p></p>

                   <h4 align="center">L V I S</h4>
              <div>{domLoaded?<ReactPlayer
              url="https://youtu.be/EXVvxEsPVqk" 
                
                playing="false"
                width="100%"
                height="70vh"
                controls="true"
                />:''}</div>
                <p></p>
             
              <h4 align="center">IMMERSIVE TRAINING IN TASSELLAND</h4>
              <div>{domLoaded?<ReactPlayer
              url="https://youtu.be/JHOXARhIB7Q" 
                
                playing="false"
                width="100%"
                height="70vh"
                controls="true"
                />:''}</div>
                <p></p>
               
               <Image src="/tm.png" width="100%" ></Image>
               <Image src="/About.png" width="100%" ></Image>
               <Image src="/Services.png" width="100%" ></Image>
              
               <Image src="/Contact.png" width="100%" ></Image>
               
             
              
             
               <Footer2></Footer2>
               </Container>
   
   </div>
  
   
  )
}

