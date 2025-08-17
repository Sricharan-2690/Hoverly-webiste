import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <Container>
        <div className="mb-4 text-center">
          <span className="badge-soft mb-2">Testimonials</span>
          <h2 className="section-title mt-4">Trusted By Amazing Founders</h2>
          <p className="section-subtitle">Some words from our lovely customers.</p>
        </div>
        <Row className="g-4">
          {testimonials.map((t, idx) => (
            <Col md={6} lg={3} key={idx}>
              <div className="card-surface p-4 h-100">
                <p className="mb-3" style={{color: 'var(--text)'}}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{color: 'var(--muted)'}}>
                  <div className="fw-semibold" style={{color: 'var(--heading)'}}>{t.author}</div>
                  <div>{t.role}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
