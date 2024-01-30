
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion,useScroll, useMotionValueEvent} from "framer-motion"
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'
export default function Header4() {
    const { scrollY } = useScroll()
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    const [hidden,setHidden] = useState(false)
    
    useMotionValueEvent(scrollY, "change",(latest) =>{
        const prev = scrollY.getPrevious()
        if(latest > prev ){
            setHidden(true)
        }else{
            setHidden(false)
        }
    })
     return (
        
        <div className="fluid">
      
    
           
            <Navbar  expand="lg" className="navbar navbar-dark bg-black" style={{fontSize:"18px",fontFamily:"Whitney"}}>
           
           
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                <Navbar.Collapse id="basic-navbar-nav">

                <a href="/" style={{textDecoration:'none',color:'white'}}><h3 style={{fontFamily:"Whitney",fontSize:"22px"}}>T A S S E L T I P</h3></a>
               
                {/* <motion.h3 style={{fontFamily:"Whitney",fontSize:"25px"}} initial={{x:10,y:10,opacity:-5}} 
                animate={{x:10,y:10,opacity:1}} 
                transition={{delay:0.6,duration:4}}
                >
                T A S S E L T I P
                </motion.h3> */}

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

    

