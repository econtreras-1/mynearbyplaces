import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useState } from "react";

function NavigationBar(props) {
    return (
        <Navbar bg="warning" expand="lg">
            <Navbar.Brand>Local Restaurant Reviews</Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/add">Add Location</Link></Nav.Link>
                    <Nav.Link><Link to="/review">Reviews</Link></Nav.Link>
                    <Nav.Link><Link to="/addreview">Submit Review</Link></Nav.Link>
                    <br />
                    <Nav.Link>
                        {
                            props.username === '' ?
                                <Link to='/login'>Login</Link>
                                :
                                <Link to='/logout'>{props.username}, Logout</Link>
                        }

                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    );
}

export default NavigationBar;