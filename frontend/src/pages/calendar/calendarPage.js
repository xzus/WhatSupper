import React from 'react';
import RecipeBlock from './RecipeBlock';
import {Container, Row, Col} from 'react-bootstrap';

const recipeData = [
  {
    num: 1,
    color: 'pink',
    recipeText :'Pasta w/Meat Sauce',
    days: 'Monday, Tuesday, Wednesday'
  },
  {
    num: 2,
    color: 'blue',
    recipeText :'Enchiladas',
    days: 'Thursday, Friday, Saturday'
  },
  {
    num: 3,
    color: 'green',
    recipeText :'Grilled Cheese Sandwiches',
    days: 'Sunday'
  }
]

function calendarPage() {
    return (
        <Container>
            <Row className="justify-content-center">
              {recipeData.map((recipe) => {
                return (
                  <RecipeBlock {...recipe}/>
                );
              })}
            </Row>
        </Container>
    )
}

export default calendarPage;
