import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Button, Alert, Breadcrumb, Card, Form, Row, Col, Navbar, Nav, NavDropdown, Carousel, Image, ListGroup} 
from 'react-bootstrap';

export default function Footer2() {
   
    return(
        <div class="mt-5" style={{color:"black"}}>

                <Row >
                <Col>
                
                
                    <h6>A B O U T</h6>
                    <p style={{fontFamily:'arial-narrow',fontSize:'14px',width:'300px',lineHeight:"30px"}}>
                    Tasseltip Technology and Business Advisory Services is a Strategy and Technology 
                    Consulting company. "Gamiformation" and "Tasselland" are trademark properties of the company.
                    </p>
                  
                
                  </Col>
                  
                
                   <Col>
                   <h6>A D D R E S S</h6>
                    <p style={{fontFamily:'arial-narrow',fontSize:'14px',width:'300px',lineHeight:"30px"}}>
                    205 Devonshire Way, Shirley
                    Croydon, CR08BZ
                    
                    </p>
                    </Col>

                    <Col>
                   <h6>W H Y TASSELTIP ?</h6>
                   
                    <p style={{fontFamily:'arial-narrow',fontSize:'14px',width:'300px',lineHeight:"30px"}}>- Customer Delight</p>
                    <p style={{fontFamily:'arial-narrow',fontSize:'14px',width:'300px',lineHeight:"30px"}}>- Transparency</p>
                    <p style={{fontFamily:'arial-narrow',fontSize:'14px',width:'300px',lineHeight:"30px"}}>- Quality</p>
                    <p style={{fontFamily:'arial-narrow',fontSize:'14px',width:'300px',lineHeight:"30px"}}>- Speed</p>

                   
                    </Col>

                </Row>
               
               
            
            </div>
       
    )
}