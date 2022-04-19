import React from 'react';
import RecipeBlock from './RecipeBlock';
import {Container, Row, Col} from 'react-bootstrap';

function calendarPage() {
    return (
        <Container>
            <Row className="justify-content-center">
              <RecipeBlock
                num={1}
                color='pink'
                recipeText='Pasta w/Meat Sauce'
                days='Monday, Tuesday, Wednesday'/>
            </Row>
        </Container>
    )
}

export default calendarPage;
