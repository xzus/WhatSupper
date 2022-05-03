import React from 'react';
import Modal from './modal.js';
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
    const item = { title: "", description: "", image: null };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  render() {
    return (
      <div>
            <h1 style={{marginBottom: '3vh', marginTop: '2vh'}}> Popular Recipes </h1>
            <div class="row">
            <div class="col-sm-6">
              <div class="recipeCard">
                <div class="card-body">
                  <h5 class="card-title"> Taco Salad </h5>
                  <p class="card-text"> Winner on April 4th! </p>
                  <a href="https://www.wholesomeyum.com/recipes/taco-salad/" class="btn btn-warning"> Recipe </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="recipeCard">
                <div class="card-body">
                  <h5 class="card-title"> Chicken Fried Rice </h5>
                  <p class="card-text"> Winner on March 28th! </p>
                  <a href="https://www.averiecooks.com/easy-better-takeout-chicken-fried-rice/" class="btn btn-warning"> Recipe </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          <div class="col-sm-6">
            <div class="recipeCard">
              <div class="card-body">
                <h5 class="card-title"> Veggie Quesadillas </h5>
                <p class="card-text">Winner on February 22nd! </p>
                <a href="https://www.gimmesomeoven.com/easy-veggie-quesadillas-recipe/" class="btn btn-warning"> Recipe </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="recipeCard">
              <div class="card-body">
                <h5 class="card-title"> Fajitas</h5>
                <p class="card-text"> Winner on January 1st! </p>
                <a href="https://www.spendwithpennies.com/easy-chicken-fajitas/" class="btn btn-warning"> Recipe </a>
              </div>
            </div>
          </div>
        </div>
        <h1> Past Recipes </h1>
        <div class="row">
            <div class="col-sm-6">
              <div class="recipeCard">
                <div class="card-body">
                  <h5 class="card-title"> Broccoli Pesto Pasta </h5>
                  <a href="https://themodernproper.com/broccoli-pesto-pasta" class="btn btn-warning"> Recipe </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="recipeCard">
                <div class="card-body">
                  <h5 class="card-title"> Instant Pot Mac and Cheese </h5>
                  <a href="https://thesaltymarshmallow.com/instant-pot-mac-and-cheese/" class="btn btn-warning"> Recipe </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          <div class="col-sm-6">
            <div class="recipeCard">
              <div class="card-body">
                <h5 class="card-title"> Cauliflower Gnocchi </h5>
                <a href="https://pinchofyum.com/homemade-cauliflower-gnocchi" class="btn btn-warning"> Recipe </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="recipeCard">
              <div class="card-body">
                <h5 class="card-title"> Roasted Red Pepper Pasta </h5>
                <a href="https://themodernproper.com/creamy-roasted-red-pepper-pasta" class="btn btn-warning"> Recipe </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
              <div class="recipeCard">
                <div class="card-body">
                  <h5 class="card-title">Spicy Garlic Ramen Noodles</h5>
                  <a href="https://lindseyeatsla.com/spicy-garlic-noodles/" class="btn btn-warning"> Recipe </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="recipeCard">
                <div class="card-body">
                  <h5 class="card-title"> Falafel Pita Pocket </h5>
                  <a href="https://www.myrecipes.com/recipe/mini-falafel-pocket-sandwiches" class="btn btn-warning"> Recipe </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
          <div class="col-sm-6">
            <div class="recipeCard">
              <div class="card-body">
                <h5 class="card-title"> Shrimp Alfredo Scampi </h5>
                <a href="https://krollskorner.com/recipes/shrimp-scampi-alfredo/" class="btn btn-warning"> Recipe </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="recipeCard">
              <div class="card-body">
                <h5 class="card-title"> Roasted Brussel Sprouts</h5>
                <a href="https://www.foodnetwork.com/recipes/ina-garten/roasted-brussels-sprouts-recipe2-1941953" class="btn btn-warning"> Recipe </a>
              </div>
            </div>
          </div>
        </div>

        <div className = "Submit Section">
          <button onClick={this.createItem}> Add a Recipe </button>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </div>
    );
  };

}

export default recipesPage;