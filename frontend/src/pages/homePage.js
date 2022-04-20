import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
function homePage() {
    const titles = ["Family Voting", "Recipe", "Groceries", "Pantry"];
    return (
        <Container>
  <Row>
    <Col><h2>Whats Supper!</h2> </Col>
  </Row>
    <Row>
    <Card>
  <Card.Body>Reserved for Calendar</Card.Body>
</Card>
    </Row>
    <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{titles[idx]}</Card.Title>
          <Card.Text>
            TODO
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </Container>
    )
}

export default homePage;