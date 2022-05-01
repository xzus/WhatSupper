import React from 'react';

const Modal = props => {
    return(
      <div className = "modal">
        <div className = "modal-content">
          <div className = "modal-header">
            <h1> Add your own Receipe! </h1>
          </div>
          <div className = "modal-body">
            <h3> Enter the name of your Recipe! </h3>
            <h3> Enter a Description of your Recipe! </h3>
            <h3> Insert a picture of the Recipe!  </h3>
          </div>
          <div className = "modal-footer">
            <button type = "button"> Submit Now! </button>
          </div>
          
        </div>
  
      </div>
    )
}

export default Modal