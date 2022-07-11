
import './header.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import { useState} from 'react'
import {Link} from 'react-router-dom'

const Header = () => {   

const [show , setShow] = useState(false)
const showDropdown = (e) =>{
    setShow(!show);
}
const hideDropdown = (e) =>{
    setShow(false);
}

    return(
        <div className='header-container'>
        <Link to="/">
            <img className='header-image' src='http://183.82.120.80:9999/KPH-Footerlg.png' alt='company' />
        </Link>
        <div className='navbar-container'>
            <Navbar  bg="" expand="lg" >
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="me-auto">
                {/* <Nav.Link href="/" className='navbar-link' >HOME</Nav.Link>      */}
                <Nav.Link href="/about-us" className='navbar-link' >ABOUT US</Nav.Link>
                <NavDropdown onMouseEnter={showDropdown} onMouseLeave={hideDropdown} show={show}
                  title="SERVICES"  className='navbar-link' id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/services/web-and-mobile-app-development">Web & Mobile App Development</NavDropdown.Item>
                    <NavDropdown.Item href="/services/analytics">Analytics</NavDropdown.Item>
                    <NavDropdown.Item href="/services/data-quality">Data Quality</NavDropdown.Item>
                    <NavDropdown.Item href="/services/cloud-computing">Cloud Computing</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/sap" className='navbar-link'>SAP B1</Nav.Link>
                <Nav.Link href="/contact-us" className='navbar-link'>CONTACT US</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
         </div>
    )
}

export default Header