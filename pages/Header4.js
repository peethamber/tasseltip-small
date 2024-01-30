
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'
export default function Header4() {
   
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
   
   
       
     return (
        
        <div className="fluid">
      
    
           
            <Navbar  expand="lg" className="navbar navbar-dark bg-black" style={{fontSize:"18px",fontFamily:"inherit"}}>
           
           
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                <Navbar.Collapse id="basic-navbar-nav">

                <a href="/" style={{textDecoration:'none',color:'white'}}><h3 style={{fontFamily:"inherit",fontSize:"22px"}}>T A S S E L T I P</h3></a>
               
             

                <Nav className="navbarNav mx-auto " 
                >
                <Nav.Link href="./PostsAndVideos" >Media</Nav.Link>
                {/* <Nav.Link href="#">XR Services</Nav.Link>      */}
                </Nav>
                </Navbar.Collapse>
           
           
            </Navbar>
            </div>
        
    )
}

    

