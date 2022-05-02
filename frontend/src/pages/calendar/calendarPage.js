import React, {useState} from 'react';
import Calendar from './CalendarBlock';
import {Container, Row, Col} from 'react-bootstrap';
import RecipeBlock from './RecipeBlock';

const daysData = {
  "Mon" : "",
  "Tues" : "",
  "Wed" : "",
  "Thur" : "",
  "Fri" : "",
  "Sat" : "",
  "Sun" : "",
};

function CalendarPage() {
    const [CalendarData, setCalendarData] = useState(daysData);

    const recipeData = [
      {
        num: 1,
        color: 'pink',
        recipeText :'Pasta w/Meat Sauce',
        days: 'Monday, Tuesday, Wednesday',
      },
      {
        num: 2,
        color: 'blue',
        recipeText :'Enchiladas',
        days: 'Thursday, Friday, Saturday',
      },
      {
        num: 3,
        color: 'green',
        recipeText :'Grilled Cheese Sandwiches',
        days: 'Sunday',
      }
    ]

    console.log(CalendarData);

    return (
        <Container>
            <Calendar data={CalendarData}/>
            <Row className="justify-content-center">
              {recipeData.map((recipe) => {
                return (
                  <RecipeBlock setter= {setCalendarData} key={recipe.recipeText} {...recipe}/>
                );
              })}
            </Row>
        </Container>
    )
}

export default CalendarPage;
