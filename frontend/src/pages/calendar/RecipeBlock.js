import React, {useState} from 'react';
import {Container, Row, Card, ButtonGroup, ToggleButton} from 'react-bootstrap'



const RecipeBlock = (props) => {
  const days = [
    "Mon",
    "Tues",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun",
  ];

  const boxStyle = {
    'backgroundColor' : '#FFD24D',
    'width': '85%',
    'height': '10em',
    'textAlign': 'left',
  };

  const recipeTextStyle = {
    'color' : props.color,
    'fontSize': '30px'
  };

  const [selectedDay, setSelectedDay] = useState("");

  return (
    <Card style = {boxStyle}>
      <Card.Title style={recipeTextStyle}>Recipe #{props.num}</Card.Title>

      <Card.Body>
        <h4>{props.recipeText}</h4>

        <ButtonGroup className="mb-2">
        {days.map((day, idx) => (
          <ToggleButton
            key={idx}
            id={`day-${idx}`}
            type="radio"
            variant="warning"
            name="radio"
            value={day}
            checked={selectedDay === day}
            onChange={
              (e) => {
                props.setter(prevState => {
                  let data = Object.assign({}, prevState);
                  data[day] = props.recipeText;
                  return data;
                });
              }}
          >
            {day}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </Card.Body>

    </Card>
  )
}

export default RecipeBlock;
