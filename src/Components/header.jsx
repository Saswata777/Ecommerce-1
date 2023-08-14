import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsFillCartCheckFill } from "react-icons/bs";

import '../App.css'

const Header = () => {
  return (
    <Navbar bg="dark"  variant='dark' style={{height: 80}}>
        <Container>
          <Navbar.Brand>
                <a href="/">Shopping Cart</a>
          </Navbar.Brand>
          <Navbar.Text className='search'>
                <Form.Control type="text" placeholder="Normal text" style={{width: 500}} className='m-auto'/>
          </Navbar.Text>
            <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <BsFillCartCheckFill fontSize="25px"/>
                        </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header