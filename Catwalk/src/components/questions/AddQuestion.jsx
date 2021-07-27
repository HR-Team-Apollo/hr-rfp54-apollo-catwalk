import React from 'react';
import ModalContext from '../../modalContext';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('clicked!');
  }

  render() {
    const modalContent = 
      (<form>
        <h3>Ask Your Question</h3>
        <h4>About the [Product Name Here]</h4>
        {/* Question */}
        <label>
            Your Question*
        </label>
        <textarea
          rows="6" 
          cols="57"
        >
        </textarea>
        {/* Nickname */}
        <label>
            What is your nickname*
          <br />
            For privacy reasons, do not use your full name or email address.
        </label>
        <input 
          type="text"
          placeholder="Example: jack543!"
        />
        <br />
        {/* Email */}
        <label>
            Your email*
        </label>
        <br />
        <input 
          type="text"
          placeholder="Your Email"
        />
        <br />
        {/* Submit */}
        <button onClick={this.handleSubmit}>
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