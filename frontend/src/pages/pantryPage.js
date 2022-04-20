import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
function pantryPage() {
    return (
        <div>
            <h1>Pantry</h1>
            <input type="text" placeholder="Search" />
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Product</th>
                <th>Quantity</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                <td colSpan={2}>
                    <h3>Produce</h3></td>
                </tr>
                <tr>
                <td>Brocolli</td>
                <td>3 bags</td>
                </tr>
                <tr>
                <td>Tomato</td>
                <td>4</td>
                </tr>
                <tr>
                <td>Onion</td>
                <td>3</td>
                </tr>
                <tr>
                <td colSpan={2}>
                    <h3>Meat</h3></td>
                </tr>
                <tr>
                <td>Sirloin</td>
                <td>2 lbs</td>
                </tr>
                <tr>
                <td>Salmon</td>
                <td>1 lb</td>
                </tr>
                <tr>
                <td>Chicken thigh</td>
                <td>2 lbs</td>
                </tr>
                <tr>
                <td colSpan={2}>
                    <h3>Other</h3></td>
                </tr>
                <tr>
                <td>Eggs</td>
                <td>1 dozen</td>
                </tr>
                <tr>
                <td>Chicken Broth</td>
                <td>1 quart</td>
                </tr>
            </tbody>
            </Table>
            <Button variant="outline-primary">Update Pantry</Button>{' '}
        </div>
        
    )
}

export default pantryPage;