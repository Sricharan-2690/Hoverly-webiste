import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { projects } from '../data/work'

export default function Work() {
  return (
    <section id="work" className="section">
      <Container>
        <div className="mb-4">
          <h2 className="section-title">We Build Experiences,<br/>Not Just Websites</h2>
          <p className="section-subtitle">Transforming ideas into powerful digital experiences that drive success.</p>
        </div>
        <Row className="g-4">
          {projects.map((p, idx) => (
            <Col md={6} lg={4} key={idx}>
              <motion.div className="card-surface p-4 h-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }}>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5 className="m-0 heading-font">{p.title}</h5>
                  <span className="badge-soft">Case Study</span>
                </div>
                <p style={{color: 'var(--muted)'}}>{p.blurb}</p>
                <div className="d-flex flex-wrap gap-2">
                  {p.tags.map((t, i) => <Badge bg="" key={i} className="badge-soft">{t}</Badge>)}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
