import React from 'react';
import Modal from './modal';
import {Component} from 'react';

class recipesPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      viewCompleted: false,
      modal: false, 
      activeItem: {
        title: "", 
        description: "", 
        image: null, 
      }, 
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();
    alert("save" + JSON.stringify(item));
  };

  handleDelete = (item) => {
    alert("delete" + JSON.stringify(item));
  };

  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  render() {
    return (
      <div>
            <h1> Popular Recipes </h1>
            <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"> Taco Salad </h5>
                  <p class="card-text"> Winner on April 4th! </p>
                  <a href="#" class="btn btn-primary"> Recipe </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"> Chicken Fried Rice </h5>
                  <p class="card-text"> Winner on March 28th! </p>
                  <a href="#" class="btn btn-primary"> Recipe </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"> Veggie Quesadillas </h5>
                <p class="card-text">Winner on February 22nd! </p>
                <a href="#" class="btn btn-primary"> Recipe </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"> Fajitas</h5>

                <p class="card-text"> Winner on January 1st! </p>
                <a href="#" class="btn btn-primary"> Recipe </a>
              </div>
            </div>
          </div>
        </div>
        <h1> Past Recipes </h1>
        <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"> Brocoli Pesto Pasta </h5>

                  <a href="#" class="btn btn-primary"> Recipe </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"> Instant Pot Mac and Cheese </h5>
                  
                  <a href="#" class="btn btn-primary"> Recipe </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"> Cauliflower Gnocci </h5>
                
                <a href="#" class="btn btn-primary"> Recipe </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"> Roasted Red Pepper Pasta </h5>
                
                <a href="#" class="btn btn-primary"> Recipe </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Spicy Garlic Ramen Noodles</h5>
                  <a href="#" class="btn btn-primary"> Recipe </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title"> Falafel Pita Pocket </h5>
                  <a href="#" class="btn btn-primary"> Recipe </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"> Shrimp Alfredo Scampi </h5>
                <a href="#" class="btn btn-primary"> Recipe </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"> Roasted Brussel Sprouts</h5>
                <a href="#" class="btn btn-primary"> Recipe </a>
              </div>
            </div>
          </div>
        </div>

        <div className = "Submit Section">
          <button onClick={this.createItem}> Add a Recipe </button>
        </div>
       
          <Modal
            activeItem = {this.state.activeItem}
            toggle = {this.toggle}
            onSave = {this.handleSubmit}
          />

      </div>
    );
  };

}

export default recipesPage;