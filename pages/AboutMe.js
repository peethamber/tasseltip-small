import React from 'react';

import ReactPlayer from 'react-player'
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import Header4 from './Header4';
import Footer2 from './Footer2';


export default function AboutMe() {

  return ( 
    
    <div className="main-div">
    <Header4></Header4>
    <Container flex >
    <img className="img-fluid mx-auto d-block" src="peethamber.jpeg" width="30%"/>
    <Card style={{fontFamily:"inherit",
    fontSize:"19px",alignItems:'center'}}>
    <div className="mt-5">
    <p>
    I have completed around 30 years of my journey in this exciting world of building 
    software. It has been an education in itself. 
    It was the best of times when I started in the early '90s. 
    The information industry was bracing for a storm of technological disruption. 
    </p>
    <p>
    First, Marc Andreessen launched Netscape, heralding the Internet's coming of age,
     which has been one of the most defining phenomena of this century. 
     Everyone was getting accustomed to the idea of being connected like never before.
      Then, a new version of Windows launched, and the Internet browser 
      became a built-in feature of every OS and every device. 
      </p>
      <p>
      Websites and URLs have become critical identifiers in a connected world. Everything from writing a simple document to transacting over payment engines has become part of this bludgeoning online world. No business went untouched by this massive wave of disruption. It saw the untimely end of many companies that fatally ignored this disruption. 
      Fast forward to today, and we are in the middle of accelerated development of the Internet economy. We are ushering in a new age of digitization and have started calling it the new normal. 
      </p>
      <p>
      There are a few key factors that define this change. The proliferation of Social networks, Increased adoption of Mobile devices, A recent surge in Open Source, Progress in Artificial intelligence, Evolution of Decentralized Applications and Decentralized Finance, Emergence of Digital Assets such as NFT and Crypto, and not to forget the Metaverse have all contributed to the change. Against this backdrop, I have helped CIOs and their teams globally to navigate their companies through business and technology transformations. In the process, I have had a unique ring-side seat situation that enabled me to experience these changes up close.
      I have launched my company, Tasseltip Technology, and Business Advisory Services 
      to leverage my experience to help you, my valued client, chart your way forward 
      and help make your businesses competitive and profitable. 
      </p>
      </div>
    </Card>
    
    </Container>
  
   </div>
  )
}
