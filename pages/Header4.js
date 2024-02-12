
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion';
import { Roboto_Serif, Rubik,Inter } from '@next/font/google'

const roboto = Roboto_Serif({ weight: '300',subsets: ['latin']  })


export default function Header4() {
   
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
   
   
       
     return (
        
        <div className="fluid">
      
    
           
            <Navbar  expand="lg" className="navbar navbar-dark bg-black" style={{fontSize:"18px",fontFamily:roboto.style.fontFamily}}>
           
           
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                <Navbar.Collapse id="basic-navbar-nav">

                <motion.a initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:3}}
                href="/" style={{textDecoration:'none',color:'white'}}><h3 style={{fontSize:"22px",fontFamily:roboto.style.fontFamily}}>T A S S E L T I P</h3>
                </motion.a>
               
             

                <Nav className="navbarNav mx-auto " 
                >
                <Nav.Link href="./PostsAndVideos" >MEDIA</Nav.Link>
                <Nav.Link href="./Tasscommerce">TassCOMMERCE</Nav.Link>   
                <Nav.Link href="./XRSolutions">XR SOLUTIONS</Nav.Link>  
                <Nav.Link href="https://tass-commerce-ver-base.vercel.app">TassCOMMERCE-DEMO</Nav.Link>
                </Nav>

                </Navbar.Collapse>
              
           
            </Navbar>
            <img src="/LCCI-logo1.png" width="25%"/>
            </div>
        
    )
}

    

