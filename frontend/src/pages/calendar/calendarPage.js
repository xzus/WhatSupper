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
        color: '#720026',
        recipeText :'Pasta w/Meat Sauce',
        days: 'Monday, Tuesday, Wednesday',
      },
      {
        num: 2,
        color: '#17C3B2',
        recipeText :'Enchiladas',
        days: 'Thursday, Friday, Saturday',
      },
      {
        num: 3,
        color: '#4D6DFF',
        recipeText :'Grilled Cheese Sandwiches',
        days: 'Sunday',
      }
    ]

    console.log(CalendarData);

    return (

        <Container>
            <h1 style={{marginBottom: '3vh', marginTop: '2vh'}}> Calendar </h1>
            <Calendar data={CalendarData}/>
            <Row style={{marginTop: '5vh'}} className="justify-content-center">
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
