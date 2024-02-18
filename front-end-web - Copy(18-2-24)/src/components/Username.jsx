// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Username = () => {
  let user=JSON.parse(localStorage.getItem('user-info'))
  console.log(user)
  return (
    <div>
        <Navbar>
            <Nav>
            <NavDropdown title='username'>
                <NavDropdown.Item>Profile Setting</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar>
    </div>
  )
}

export default Username
