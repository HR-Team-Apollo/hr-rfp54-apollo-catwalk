import React from 'react';

const BodyInput = ({stateUpdate}) => (
  <div className="review-form-section">
    <label htmlFor="body">body: </label>
    <input
      type="textarea"
      name="body"
      id="body"
      placeholder="Why did you like this product or not?"
      maxLength="1000"
      minLength="50"
      required
      onChange={
        (e) => {
          let text = e.target.value.length <= e.target.minLength?
            `Minimum required characters left: ${e.target.minLength - e.target.value.length}`: 'Minimum Reached';
          document.getElementById('minimumCharacters').innerText = text;
          stateUpdate('body', e.target.value);
        }
      }
    />
    <p id="minimumCharacters">
      Minimum required characters left: 50
    </p>
  </div>
);

export default BodyInput;