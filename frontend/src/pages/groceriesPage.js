import React from 'react';

function groceriesPage() {
    return (
        <div>
            <h1>Grocery List </h1>
            
            <button type="button" class="btn btn-outline-dark btn-lg">Add</button>
                
            <table class="table">
                <thead>
                <tr class="table-success">
                    <th scope="col"><h4>Pantry</h4></th>
                    <th scope="col"><h4>Quantity</h4></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row"><h7>Noodles</h7></th>
                    <th scope="row"><h7>4 packs</h7></th>
                </tr>
                <tr>
                    <th scope="row"><h7>Black Beans</h7></th>
                    <th scope="row"><h7>2 cans</h7></th>
                </tr>
                <tr>
                    <th scope="row"><h7>Bread</h7></th>
                    <th scope="row"><h7>1</h7></th>
                </tr>

                <tr class="table-primary">
                    <th scope="row"><h4>Produce</h4></th>
                    <th scope="row"><h4>Quantity</h4></th>
                </tr>
                <tr>
                    <th scope="row"><h7>Tomato</h7></th>
                    <th scope="row"><h7>4</h7></th>
                </tr>
                <tr>
                    <th scope="row"><h7>Orange</h7></th>
                    <th scope="row"><h7>2</h7></th>
                </tr>
                <tr>
                    <th scope="row"><h7>Lettuce</h7></th>
                    <th scope="row"><h7>1</h7></th>
                </tr>


                <tr class="table-danger">
                    <th scope="row"><h4>Meats</h4></th>
                    <th scope="row"><h4>Quantity</h4></th>
                </tr>
                <tr>
                    <th scope="row"><h7>Beef</h7></th>
                    <th scope="row"><h7>2 lb</h7></th>
                </tr>
                <tr>
                    <th scope="row"><h7>Chicken Breast</h7></th>
                    <th scope="row"><h7>4 lb</h7></th>
                </tr>
                <tr>
                    <th scope="row"><h7>Shrimp</h7></th>
                    <th scope="row"><h7>1 lb</h7></th>
                </tr>


                <tr class="table-info">
                    <th scope="row"><h4>Dairy</h4></th>
                    <th scope="row"><h4>Quantity</h4></th>
                </tr>
                <tr>
                    <th scope="row"><h7> 2% Milk</h7></th>
                    <th scope="row"><h7>1</h7></th>
                </tr>
                <tr>
                    <th scope="row"><h7>Cheese</h7></th>
                    <th scope="row"><h7>1</h7></th>
                </tr>
                <tr>
                    <th scope="row"><h7>Butter</h7></th>
                    <th scope="row"><h7>1 stick</h7></th>
                </tr>


                <tr class="table-warning">
                    <th scope="row"><h4>Frozen</h4></th>
                    <th scope="row"><h4>Quantity</h4></th>
                </tr>
                <tr>
                    <th scope="row"><h7>Waffles</h7></th>
                    <th scope="row"><h7>1</h7></th>
                </tr>
                <tr>
                    <th scope="row"><h7>Fries</h7></th>
                    <th scope="row"><h7>1</h7></th>
                </tr>

                <tr class="table-dark">
                    <th scope="row"><h4>Miscellaneous</h4></th>
                    <th scope="row"><h4>Quantity</h4></th>
                </tr>
                <tr>
                    <th scope="row"><h7>Napkins</h7></th>
                    <th scope="row"><h7>4</h7></th>
                </tr>

                </tbody>
            </table>
        </div>
    )
}

export default groceriesPage;