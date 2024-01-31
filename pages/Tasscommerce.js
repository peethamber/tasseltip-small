import Header4 from "./Header4"
import React, { useState,useEffect } from 'react';
import MediaQuery from 'react-responsive'
import { motion } from 'framer-motion';
import {Container, Modal,Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup, ModalDialog} 
from 'react-bootstrap';

export default function Tasscommerce ()
 {
    const [domLoaded, setDomLoaded] = useState(false);
    useEffect(() => {
        setDomLoaded(true);
      }, []);
    return (
        <div>
        <Container fluid>
            <Header4></Header4>
            {domLoaded ? 
            
            <MediaQuery minWidth={1224}>
            <motion.img src="/commerce1.png" width="100%"
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:2.4}}/>
           
           <motion.img src="/commerce2.png" width="100%"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2.4}}/>
          
           <motion.img src="/commerce3.png" width="100%"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2.4}}/>
           
            </MediaQuery>
           
            :''}
           {domLoaded ? 
            <MediaQuery maxWidth={1224}>
            <motion.img src="/commerce1-mobile.png" width="100%"
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:2.4}}/>
           
           <motion.img src="/commerce2-mobile.png" width="100%"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2.4}}/>
          
           <motion.img src="/commerce3-mobile.png" width="100%"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2.4}}/>
            </MediaQuery>:''
           
            }
            </Container>
        </div>
    )
    
}