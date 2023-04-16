import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';

export default function Header3() {
 
     return (
        
        <div>
    
            <a href="/"><img className="img-fluid mx-auto d-block" src="Tasseltip.png" width="20%"/></a>
           
            <Navbar bg="light" variant="light" expand="lg" className="navbarNav" >
            <Container flex>
               
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbarNav mx-auto" style={{fontSize:"19px"}}>
                <NavDropdown title="Capabilities" renderMenuOnMount={true}  >
                          <Row>
                            
                            <Col style={{fontSize:"19px"}}>
                                <NavDropdown.Item eventKey="Services" 
                                href="./ourofferings">
                                    Our Expertise</NavDropdown.Item>
                                
                            </Col>
                            
                            </Row>
                   
                          </NavDropdown>
                <NavDropdown title="Gamification" renderMenuOnMount={true}  >
                          <Row>
                            
                            <Col style={{fontSize:"19px"}}>
                                <NavDropdown.Item eventKey="Gamiform" 
                                href="./whygamiform">
                                    Why "Gamiform"</NavDropdown.Item>
                                
                            </Col>
                            
                            </Row>
                   
                          <Row>
                                
                                <Col style={{fontSize:"19px"}}>
                                    <NavDropdown.Item eventKey="Gamiform" 
                                    href="./gamiform" >
                                         "Gamiform" The Workplace</NavDropdown.Item>
                                    
                                </Col>
                                
                                </Row> 
                                    
                          </NavDropdown>
                    <NavDropdown title="The Team" renderMenuOnMount={true}  >
                                            
                        <Row>

                        <Col style={{fontSize:"19px"}}>
                            <NavDropdown.Item eventKey="About Me" 
                            href="./AboutMe" >
                                About Me</NavDropdown.Item>
                           
                        </Col>
                        
                        </Row>
                        <Row>

                        <Col style={{fontSize:"19px"}}>
                            <NavDropdown.Item eventKey="Contact Me" 
                            href="./ContactMe" >
                                Contact Me</NavDropdown.Item>
                        
                        </Col>

                        </Row>
                        
                        </NavDropdown>
                                        
                        <NavDropdown title="Walkthrough" renderMenuOnMount={true}  >
                                      
                                      <Row>
                  
                                      <Col style={{fontSize:"19px"}}>
                                          <NavDropdown.Item eventKey="Virtual Office" 
                                          href="https://www.tasseltip.com/webgl-small/index.html" target="_blank">
                                              The Office</NavDropdown.Item>
                                          <NavDropdown.Item eventKey="MensFormals" 
                                          href="https://www.tasseltip.com/webgl-small-meta/index.html" target="_blank">
                                              TasselLand Metaverse</NavDropdown.Item>
                                      </Col>
                                      
                                      </Row>
                                       
                          </NavDropdown>
                       
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
        
    )
}

    

