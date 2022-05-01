import React from 'react';
import { Button } from 'reactstrap';
import { Component } from 'react';

class Modal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  render (){
    const {onSave} = this.props;
    return(
    <div className="modal">
    <form onSubmit = {this.handleSubmit}>
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
    </form>
  </div>);
  }
}

export default Modal