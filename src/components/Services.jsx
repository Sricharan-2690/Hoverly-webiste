import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="section">
      <Container>
        <div className="mb-4 text-center">
          <span className="badge-soft mb-2">Our Services</span>
          <h2 className="section-title mt-4">We Handle Just About Everything</h2>
          <p className="section-subtitle">From design to deployment—get your website shipped and ready to go.</p>
        </div>
        <Row className="g-4">
          {services.map((s, idx) => (
            <Col md={6} lg={4} key={idx}>
              <div className="card-surface p-4 h-100">
                <h5 className="heading-font">{s.title}</h5>
                <ul className="mt-3 mb-0">
                  {s.points.map((p, i) => <li key={i} style={{color: 'var(--muted)'}}>{p}</li>)}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
