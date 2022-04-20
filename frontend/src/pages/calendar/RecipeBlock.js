import React from 'react';
import {Container, Row} from 'react-bootstrap'

const RecipeBlock = (props) => {
  const boxStyle = {
    'backgroundColor' : '#FFBF00',
    'width': '85%',
    'height': '10em'
  };

  const recipeTextStyle = {
    'color' : props.color
  };

  return (
    <div style = {boxStyle}>
      <h2 style={recipeTextStyle}>Recipe #{props.num}</h2>
      <h4>{props.recipeText}</h4>
    </div>
  )
}

export default RecipeBlock;
