import React from 'react';
import Button from 'react-bootstrap/Button'
import { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import axios from "axios";

export default class RecipeModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      image: null
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };
  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    form_data.append('description', this.state.description);
    form_data.append('recipeName', this.state.name);
    let url = 'http://localhost:8000/api/recipe/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render (){
    const {toggle, onSave} = this.props;
    const show = true;
    return(
      
    <div className="modal">
      <>

      <Modal show={show} toggle = {toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Add your own Receipe!</Modal.Title>
        </Modal.Header>
        <Modal.Body><form onSubmit = {this.handleSubmit}>
      <div className="modal-content">
        <div className="modal-body">
          <h3> Enter the name of your Recipe! </h3>
            <div>
              <input type = "text" placeholder = "Title" id = 'name'
              value = {this.state.title} onChange = {this.handleChange}
              required/>
            </div>
          <h3> Enter a Description of your Recipe! </h3>
            <div>
              <input type = "text" placeholder = "Description" id = 'description'
              value = {this.state.content} onChange = {this.handleChange}
              required/>
            </div>
          <h3> Insert a picture of the Recipe!  </h3>
            <div>
              <input type = "file" id = "image" accept = "image/png, image/jpeg"
              onChange = {this.handleImageChange}
              required/>
            </div>
        </div>
      </div>
    </form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggle}>
            Close
          </Button>
          <Button variant="primary" onClick = {this.handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    {/* <form onSubmit = {this.handleSubmit}>
      <div className="modal-content">
        <div className="modal-header">
          <h1> Add your own Receipe! </h1>
        </div>
        <div className="modal-body">
          <h3> Enter the name of your Recipe! </h3>
            <div>
              <input type = "text" placeholder = "Title" id = 'title'
              value = {this.state.title} onChange = {this.handleChange}
              required/>
            </div>
          <h3> Enter a Description of your Recipe! </h3>
            <div>
              <input type = "text" placeholder = "Description" id = 'content'
              value = {this.state.content} onChange = {this.handleChange}
              required/>
            </div>
          <h3> Insert a picture of the Recipe!  </h3>
            <div>
              <input type = "file" id = "image" accept = "image/png, image/jpeg"
              onChange = {this.handleImageChange}
              required/>
            </div>
        </div>
        <div className="modal-footer">
          <Button type = "button" onClick = {() => onSave(this.state.activeItem)}>
            Submit Now! 
          </Button>
        </div>
      </div>
    </form> */}
  </div>);
  }
}