import React from 'react';
import {Table} from 'react-bootstrap'

const Calendar = (props) => {
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
    <Table>
      <thead>
        <tr>
          {days.map((day) => {
            return (
              <th key={day}>{day}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {days.map((day) => {
            return (
              <td key={day}>{props.data[day] == "" ?
                    "No Recipe" :
                    props.data[day]}</td>
            )})}
        </tr>
      </tbody>
    </Table>
  )
}

export default Calendar;
