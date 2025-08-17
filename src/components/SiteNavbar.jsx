import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import logo from "./logo png cropped.png"

export default function SiteNavbar() {
  const [active, setActive] = useState("work")
  const [showOffcanvas, setShowOffcanvas] = useState(false)

  const handleClose = () => setShowOffcanvas(false)
  const handleShow = () => setShowOffcanvas(true)

  const handleNavClick = (section) => {
    setActive(section)
    handleClose() // close the offcanvas menu
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }) // scroll to section
  }

  return (
    <Navbar expand="lg" className="py-3 sticky-top" style={{ background: 'transparent' }}>
      <Container className="d-flex justify-content-between">
        {/* Brand */}
        <a
          className="navbar-brand d-flex align-items-center gap-2 heading-font text-decoration-none"
          href="#"
          style={{ color: 'var(--heading)' }}
        >
          <img src={logo} alt="Hoverly Labs" className="nav-logo nav-glass-logo" />
        </a>

        {/* Mobile: toggle */}
        <Navbar.Toggle aria-controls="main-offcanvas" className="d-lg-none" onClick={handleShow} />

        {/* Desktop: glass pill navigation */}
        <div className="nav-glass d-none d-lg-flex align-items-center gap-3">
          <Nav className="me-auto ms-2">
            <Nav.Link onClick={() => handleNavClick("work")} className={active === "work" ? "active-nav-link" : "text-light"}>Work</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("services")} className={active === "services" ? "active-nav-link" : "text-light"}>Services</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("testimonials")} className={active === "testimonials" ? "active-nav-link" : "text-light"}>Testimonials</Nav.Link>
          </Nav>
          <a href="tel:+919440386496" className="btn btn-gradient ms-2">Book a Call</a>
        </div>

        {/* Mobile: Offcanvas */}
        <Offcanvas id="main-offcanvas" placement="end" show={showOffcanvas} onHide={handleClose} className="d-lg-none">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="heading-font">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link onClick={() => handleNavClick("work")} className={active === "work" ? "active-nav-link" : "text-light"}>Work</Nav.Link>
              <Nav.Link onClick={() => handleNavClick("services")} className={active === "services" ? "active-nav-link" : "text-light"}>Services</Nav.Link>
              <Nav.Link onClick={() => handleNavClick("testimonials")} className={active === "testimonials" ? "active-nav-link" : "text-light"}>Testimonials</Nav.Link>
            </Nav>
            <a href="tel:+919440386496" className="btn btn-gradient w-100 mt-3" onClick={handleClose}>Book a Call</a>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  )
}
