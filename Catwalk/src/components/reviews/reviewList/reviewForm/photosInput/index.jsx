import React from 'react';

const PhotosInput = ({stateUpdate}) => (
  <div className="review-form-section">
    {/* A button will appear allowing users to upload their photos to the form.
      Clicking the button should open a separate window where the photo to be can be selected.
      After the first image is uploaded, a thumbnail showing the image should appear.  A user should be able to add up to five images before the button to add disappears, preventing further additions.

      TODO: CREATE A BUTTON THAT ADDS ANOTHER INPUT FIELD.
      CORRELATE THE INDEX OF THIS ELEMENT WITH THE POSITION IN THE ARRAY
      */}
    <label htmlFor="photos">Photos: </label>
    <button onClick={
      //append this input
      <input
        type="url"
        name="photos"
        placeholder="https://example.com"
        style={{display:'block'}}
        pattern="https://.*"
        onChange={
          (e)=>{
            if(e.target.value){
              stateUpdate('photos', e.target.value);
            }
          }
        }
        required></input>
    }>Add Photo</button>
  </div>
);

export default PhotosInput;

