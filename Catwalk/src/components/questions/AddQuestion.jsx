import React from 'react';
import ModalContext from '../../modalContext';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const modalContent = 
      (<div>
        <label>
              Enter the question
        </label>
        <input 
          type="text"
          placeholder="stuff"
        />
        <button>
            Add Question
        </button>
      </div>
      );
    return (
      <div>
        <ModalContext.Consumer>  
          {(openModal) => <button onClick={()=>openModal(modalContent)}>Add A Question +</button>}           
        </ModalContext.Consumer>
      </div>
    );
  }
}

export default AddQuestion;