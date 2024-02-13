import React, { useState,useEffect } from 'react';
import { useRef } from 'react';
import {Container, Modal,Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup, ModalDialog} 
from 'react-bootstrap';

import { motion } from 'framer-motion';
import Header4 from './Header4.js'
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'
import Head from 'next/head'
import Footer2 from './Footer2';
import { Roboto_Serif, Rubik,Inter } from '@next/font/google';

import CookieConsent from "react-cookie-consent";
import Tasscommerce from './Tasscommerce.js';

const rubik = Rubik({ weight: '300', subsets: ['latin']  })
const roboto = Roboto_Serif({ weight: '400',subsets: ['latin']  })
const inter = Inter({ weight:'100',subsets: ['latin']  })

export default function Home() {
      const [domLoaded, setDomLoaded] = useState(false);

      const [show, setShow] = useState(true);
      

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      
     
useEffect(() => {
  setDomLoaded(true);
}, []);
      const isDesktopOrLaptop = useMediaQuery({
            query: '(min-width: 1224px)'
          })
      // const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
      // const isMediumDevice = useMediaQuery(
      //   "only screen and (min-width : 769px) and (max-width : 992px)"
      // );
      // const isLargeDevice = useMediaQuery({ query: '(min-width: 993px)' })

      // const isLargeDevice = useMediaQuery(
      //   "only screen and (min-width : 993px) and (max-width : 1200px)"
      // );
      // const isExtraLargeDevice = useMediaQuery(
      //   "only screen and (min-width : 1201px)"
      // );

  return ( 
 
   <>
   <Container fluid>
   <Header4/>
    {domLoaded ? <MediaQuery minWidth={1224}>
        {/* <Modal show={show} onHide={handleClose}
             
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
           >
            <Modal.Header closeButton>
              <Modal.Title style={{fontSize:"18px",fontFamily:roboto.style.fontFamily}}>Meet TassCOMMERCE, The State of the Art E-Commerce Platform</Modal.Title>
            </Modal.Header>
            <Modal.Body >
              <img src="/TassCOMMERCE.png" width="100%"/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <a href="./Tasscommerce" style={{color:'black',textDecoration:'none'}}>Learn More</a>
              <a href="https://tass-commerce-ver-base.vercel.app"  style={{color:'black',textDecoration:'none'}}>Demo</a>
            
            </Modal.Footer>
          </Modal>
          */}

           <motion.img src="Home.png" width="100%"
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:2.4}}/>
           
           <motion.img src="/AboutNew.png" width="100%"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2.4}}/>
          
           <motion.img src="/GamiformationNew.png" width="100%"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2.4}}/>
           
           <motion.img src="/Business-drivers.png" width="100%"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2.4}}/>
         
           <motion.img src="/TassCOMMERCE.png" width="100%" 
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:2.4}}/>

           <img src="/Contact.png" width="100%"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:3}}/>
           
    </MediaQuery>:''}
    {domLoaded ? <MediaQuery maxWidth={1224}>
        {/* <Modal show={show} onHide={handleClose}
            
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Modal.Title style={{fontFamily:'inherit'}}>Meet TassCOMMERCE, The State of the Art E-Commerce Platform</Modal.Title>
            </Modal.Header>
            <Modal.Body >
              <img src="/TassCOMMERCE.png" width="100%"/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <a href="./Tasscommerce" style={{color:'black',textDecoration:'none'}}>Learn More</a>
            
            </Modal.Footer>
          </Modal>
           */}

          <motion.img src="Home-mobile-new.png" width="100%"
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:2.4}}/>
          
           <motion.img src="/About-mobile-new.png" width="100%"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2.4}}/>
           
           <motion.img src="/Gamiformation-mobile-new.png" width="100%"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2.4}}/>
         
           <img src="/Business-drivers-mobile.png" width="100%"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2.4}}/>

          {/* <img src="/Gamiformation-mobile-pillars.png" width="100%"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2.4}}/> */}
        
        
           <img src="/TassCOMMERCE-mobile.png" width="100%"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2.4}}/>

           <img src="/Contact-mobile.png" width="100%"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2.4}}/>
          

    </MediaQuery>:''}
    <CookieConsent
        location="bottom"
        buttonText="Yes, I Agree"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
      </CookieConsent>
   {/* <img src="/Contact.png" width="100%"></img> */}
           {/* {isDesktopOrLaptop ? <img src="Home.png" width="100%"/>:
           <img src="Home-mobile-new.png" width="100%"/>
           }
           <p></p> */}
          
           {/* { isLargeDevice ? 
            <div>
           <img src="Home.png" width="100%"/>
           <img src="/AboutNew.png" width="100%"/>
           
          
           </div>
          
           :
           <div>
           <img src="Home-mobile-new.png" width="100%"/>
           <img src="/About-mobile-new.png" width="100%"/>
           
           </div>
           } */}
           <p></p>
           {/* {isDesktopOrLaptop ? <img src="/GamiformationNew.png" width="100%"></img>:
           <img src="/Gamiformation-mobile-new.png" width="100%"></img>}
           <p></p>
          
           {isDesktopOrLaptop ? <img src="/Business-drivers.png" width="100%"></img>:
           <img src="/Business-drivers-mobile.png" width="100%"></img>}
           <p></p> 
           {isDesktopOrLaptop ? <img src="/TassCOMMERCE.png" width="100%"></img>:
           <img src="/TassCOMMERCE-mobile.png" width="100%"></img>}
           <p></p>
           <img src="/Contact.png" width="100%"></img>
           
           */}
           
           </Container>
           </>
   
  )
}

