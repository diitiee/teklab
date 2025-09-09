import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <div><Navbar expand="lg" className="bg-transparent shadow-none">
    <Container>
      <Navbar.Brand href="#home">
      <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />Teklab</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto me-auto gap-3">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Services</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#link">Contact Us</Nav.Link>
        </Nav>
        <Nav className=" me-auto justify-content-end gap-5">
          <Nav.Link href="#home">
            <button
            style={{border:"none",borderRadius:"8px",
            padding:"10px 8px",height:"40px",
            alignItems:"center",justifyContent:"center"}}>Connect Us</button>
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Header