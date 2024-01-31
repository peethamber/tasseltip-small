import React, { useState,useEffect } from 'react';
import { useRef } from 'react';
import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';


import Header4 from './Header4.js'
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'
import Head from 'next/head'


export default function Home() {
      const [domLoaded, setDomLoaded] = useState(false);

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
           <img src="Home.png" width="100%"/>
           <p></p>
           <img src="/AboutNew.png" width="100%"/>
           <p></p>
           <img src="/GamiformationNew.png" width="100%"></img>
           <p></p>
           <img src="/Business-drivers.png" width="100%"></img>
           <p></p>
           <img src="/TassCOMMERCE.png" width="100%"></img>
           <p></p>
    </MediaQuery>:''}
    {domLoaded ? <MediaQuery maxWidth={1224}>
           <img src="Home-mobile-new.png" width="100%"/>
           <p></p>
           <img src="/About-mobile-new.png" width="100%"/>
           <p></p>
           <img src="/Gamiformation-mobile-new.png" width="100%"></img>
           <p></p>
           <img src="/Business-drivers-mobile.png" width="100%"></img>
           <p></p>
           <img src="/TassCOMMERCE-mobile.png" width="100%"></img>
           <p></p>

    </MediaQuery>:''}
   <img src="/Contact.png" width="100%"></img>
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

