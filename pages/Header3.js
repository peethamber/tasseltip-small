import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';

export default function Header3() {
 
     return (
        
        <div>
    
            
    <a href="/"><img src="Tasseltip_edited.png" className="d-block mx-auto" width="130px"/></a>
            <Navbar  expand="lg" className="navbar navbar-dark bg-dark" style={{fontSize:"17px"}}>
            <Container fluid>
            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbarNav mx-auto " >
                <NavDropdown title="Virtual Tour" renderMenuOnMount={true}>
                                      
                                      <Row>
                  
                                      <Col >
                                          <NavDropdown.Item eventKey="Virtual Office" 
                                          href="https://www.tasseltip.com/webgl-small/index.html" target="_blank">
                                              The Office</NavDropdown.Item>
                                          <NavDropdown.Item eventKey="MensFormals" 
                                          href="https://www.tasseltip.com/webgl-small-meta/index.html" target="_blank">
                                              TasselLand Metaverse</NavDropdown.Item>
                                      </Col>
                                      
                                      </Row>
                                       
                          </NavDropdown>
                          <NavDropdown title="Capabilities" renderMenuOnMount={true}  >
                          <Row>
                            
                            <Col>
                                <NavDropdown.Item eventKey="Services" 
                                href="./ourofferings">
                                    Our Expertise</NavDropdown.Item>
                                
                            </Col>
                            
                            </Row>
                   
                          </NavDropdown>
                         <NavDropdown title="Gamiform" renderMenuOnMount={true}  >
                          <Row>
                            
                            <Col >
                                <NavDropdown.Item eventKey="Gamiform" 
                                href="./whygamiform">
                                    Why "Gamiform"</NavDropdown.Item>
                                
                            </Col>
                            
                            </Row>
                   
                          <Row>
                                
                                <Col >
                                    <NavDropdown.Item eventKey="Gamiform" 
                                    href="./gamiform" >
                                         "Gamiform" The Workplace</NavDropdown.Item>
                                    
                                </Col>
                                
                                </Row> 
                                    
                          </NavDropdown>
                    <NavDropdown title="The Team" renderMenuOnMount={true}  >
                                            
                        <Row>

                        <Col>
                            <NavDropdown.Item eventKey="About Me" 
                            href="./AboutMe" >
                                About Me</NavDropdown.Item>
                           
                        </Col>
                        
                        <Col >
                            <NavDropdown.Item eventKey="Executive Leadership" 
                            href="./ExecLeadership" >
                                Executive Leadership</NavDropdown.Item>
                        
                        </Col>

                        </Row>
                        <Row>

                        <Col >
                            <NavDropdown.Item eventKey="Contact Me" 
                            href="./experience" >
                                My Journey</NavDropdown.Item>
                        
                        </Col>

                        </Row>
                        <Row>

                        <Col >
                            <NavDropdown.Item eventKey="Contact Me" 
                            href="./ContactMe" >
                                Contact Me</NavDropdown.Item>
                        
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

    

