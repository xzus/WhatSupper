import React from 'react';
import {Container, Row, Card} from 'react-bootstrap'

const Calendar = (props) => {
  const boxStyle = {
    'backgroundColor' : '#FFBF00',
    'width': '85%',
    'height': '10em',
    'textAlign': 'left',
  };

  const recipeTextStyle = {
    'color' : props.color,
    'fontSize': '30px'
  };

  return (
    <Card style = {boxStyle}>
      <Card.Title style={recipeTextStyle}>Recipe #{props.num}</Card.Title>

      <Card.Body>
        <h4>{props.recipeText}</h4>
      </Card.Body>

    </Card>
  )
}

export default RecipeBlock;
