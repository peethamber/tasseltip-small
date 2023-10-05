import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup, InputGroup} 
from 'react-bootstrap';

export default function Header3() {
 
     return (
        
        <div>
    
            
    <a href="/"><img src="Tasseltip_edited.png" className="d-block mx-auto" width="276
    px"/></a>
            <Navbar  expand="lg" className="navbar navbar-dark bg-dark" style={{fontSize:"23px"}}>
            <Container fluid>
            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbarNav mx-auto " >
                <NavDropdown title="Virtual Tour" renderMenuOnMount={true} style={{paddingRight:"17px"}}>
                                      
                                      <Row>
                  
                                      <Col style={{fontSize:"20px"}}>
                                          <NavDropdown.Item eventKey="Virtual Office" 
                                          href="https://www.tasseltip.com/webgl-small/index.html" target="_blank">
                                              The Office</NavDropdown.Item>
                                          <NavDropdown.Item eventKey="MensFormals" 
                                          href="https://www.tasseltip.com/webgl-small-meta/index.html" target="_blank">
                                              TasselLand Metaverse</NavDropdown.Item>
                                      </Col>
                                      
                                      </Row>
                                       
                          </NavDropdown>
                          <NavDropdown title="Capabilities" renderMenuOnMount={true} style={{paddingRight:"17px"}} >
                          <Row>
                            
                            <Col style={{fontSize:"20px"}}>
                                <NavDropdown.Item eventKey="Services" 
                                href="./ourofferings">
                                    Our Expertise</NavDropdown.Item>
                                
                            </Col>
                            
                            </Row>
                   
                          </NavDropdown>
                         <NavDropdown title="Gamiform" renderMenuOnMount={true} style={{paddingRight:"17px"}} >
                          <Row>
                            
                            <Col style={{fontSize:"20px"}}>
                                <NavDropdown.Item eventKey="Gamiform" 
                                href="./whygamiform">
                                   Gamiformation</NavDropdown.Item>
                                
                            </Col>
                            
                            </Row>
                            { <Row>
                            
                            <Col style={{fontSize:"20px"}}>
                                <NavDropdown.Item eventKey="Gamiform" 
                                href="./PostsAndVideos">
                                   Posts And Videos</NavDropdown.Item>
                                
                            </Col>
                            
                            </Row> }
                   
                         
                                    
                          </NavDropdown>
                    <NavDropdown title="The Team" renderMenuOnMount={true}  >
                                            
                        <Row>

                        <Col style={{fontSize:"20px"}}>
                            <NavDropdown.Item eventKey="About Me" 
                            href="./AboutMe" >
                                About Me</NavDropdown.Item>
                           
                        </Col>
                        
                        <Col style={{fontSize:"20px"}}>
                            <NavDropdown.Item eventKey="Executive Leadership" 
                            href="./ExecLeadership" >
                                Executive Leadership</NavDropdown.Item>
                        
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

    

