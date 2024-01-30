import React, { useState } from 'react';
import { useRef } from 'react';
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';

import { motion,useScroll, useTransform,useAnimation } from "framer-motion";
import Header4 from './Header4.js'
import { useMediaQuery } from 'react-responsive'
import Head from 'next/head'


export default function Home() {

 const scrollRef = useRef()
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })

  return ( 
  
   <div style={{backgroundColor:"black",color:"white"}} >
      <Container fluid>
  
      <Head>
            <link href="https://fonts.googleapis.com/css2?family=Whitney&display=swap" rel="stylesheet" />
      </Head>
     
    <Header4 />
    
           {isDesktopOrLaptop ? <img src="Home.png" width="100%"/>:
           <img src="Home-mobile-new.png" width="100%"/>}
           <p></p>
           {isDesktopOrLaptop ? <img src="/AboutNew.png" width="100%"/>:
           <img src="/About-mobile-new.png" width="100%"/>}
           <p></p>
           {isDesktopOrLaptop ? <img src="/GamiformationNew.png" width="100%"></img>:
           <img src="/Gamiformation-mobile-new.png" width="100%"></img>}
           <p></p>
          
           {!isDesktopOrLaptop ?
           <img src="/Gamiformation-mobile-pillars.png" width="100%"></img>:''}
           <p></p>
           {isDesktopOrLaptop ? <img src="/Business-drivers.png" width="100%"></img>:
           <img src="/Business-drivers-mobile.png" width="100%"></img>}
           <p></p> 
           {isDesktopOrLaptop ? <img src="/TassCOMMERCE.png" width="100%"></img>:
           <img src="/TassCOMMERCE-mobile.png" width="100%"></img>}
           <p></p>
           <img src="/Contact.png" width="100%"></img>
           
          
    
    
    </Container>   
   
         
   </div>
  
   
  )
}

