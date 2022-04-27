import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'


function homePage() {
    const titles = ["Family Voting", "Recipe History", "Groceries", "Pantry"];
    const pics = ["https://www.pngkit.com/png/detail/99-993265_bar-graph-clip-art.png", "https://www.myflorence.org/docs/_full_/district/food%20service/healthy-food-clipart-vector.jpg?id=712&thumbwidth=190&fullwidth=500", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGVE4GjZj3_tMtX91BceD4NFcchxT8SPWmuw&usqp=CAU", "https://media.istockphoto.com/vectors/storeroom-or-pantry-cellar-with-wooden-cupboard-vector-id831687812?k=20&m=831687812&s=612x612&w=0&h=RyySzHCqLB1tf-c4gfUteDxGriK6UZf_gQfFADpAMsI="]
    const location = ['/voting', '/recipesPage', '/groceries', '/pantry']
    return (
        <Container>
  <Row>
    <Col><h2>Whats Supper!</h2> </Col>
  </Row>
    <Row>
      <h1> </h1>
      <center><div className="homeDescription">
        <h6>Whatsupper is an easy way to collaborate with your family or friends when meal planning and choosing what to eat for dinner. 
          You have the ability to choose recipes, vote on meals, create grocery lists and check what you have in your pantry all in one 
          website! Explore our options below...
        </h6>
      </div></center>
    <Card>
  <Card.Body>Reserved for Calendar</Card.Body>
</Card>
    </Row>
    <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Link to={location[idx]}>
        <Card>
          <Card.Img/>
          <Card.Body>
            <Card.Title>{titles[idx]}</Card.Title>
            <Card.Text>
              <img src={pics[idx]} width="300vw" height="200vh"></img>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  ))}
</Row>
    </Container>
    )
}

export default homePage;