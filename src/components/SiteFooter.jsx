import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import logo from "./logo png cropped.png" // ✅ import image since it's in the same folder

export default function SiteFooter() {
  return (
    <footer className="section pt-5">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="d-flex align-items-center gap-2 heading-font">
             <img 
                          src={logo} 
                          alt="Hoverly Labs" 
                          className="nav-logo"
                        />
          </div>
          <Nav className="gap-3">
            <Nav.Link href="#" className="text-light">Work</Nav.Link>
            <Nav.Link href="#" className="text-light">Services</Nav.Link>
            <Nav.Link href="#" className="text-light">Testimonials</Nav.Link>
            <Nav.Link href="#" className="text-light">Terms</Nav.Link>
            <Nav.Link href="#" className="text-light">Privacy</Nav.Link>
          </Nav>
        </div>
        <hr className="hr-faint" />
        <div className="text-center" style={{color: 'var(--muted)'}}>
          © 2025 Hoverly – All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
