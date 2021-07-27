import React from 'react';
import ModalContext from '../../modalContext';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const modalContent = 
      (<form>
        <h3>Ask Your Question</h3>
        <h4>About the [Product Name Here]</h4>
        <label>
              Your Question*
        </label>
        <input 
          type="text"
          placeholder="Your Question"
        />
        <label>
              What is your nickname*
        </label>
        <input 
          type="text"
          placeholder="Your Nickname"
        />
        <label>
              Your email*
        </label>
        <input 
          type="text"
          placeholder="Your E-mail"
        />
        <label>
              What is your nickname*
        </label>
        <input 
          type="text"
          placeholder="Your Nickname"
        />
        <button>
            Submit Question
        </button>
      </form>
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