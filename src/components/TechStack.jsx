import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { tech } from '../data/tech'

export default function TechStack() {
  return (
    <section className="section">
      <Container>
        <div className="mb-4 text-center">
      <span className="badge-soft mb-4">Tech Stack</span>   {/* increased mb-2 → mb-4 */}
<h2 className="section-title mt-4">What Tools Do We Use?</h2>
          <p className="section-subtitle">Lightning-fast, modern tools to get your website out into the world.</p>
        </div>
        <div className="card-surface p-4">
          <Row className="g-3">
            {tech.map((t, i) => (
              <Col xs={6} md={4} lg={3} key={i}>
                <div className="card-surface p-3 h-100 d-flex align-items-center justify-content-center">
                  <span className="heading-font">{t}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  )
}
