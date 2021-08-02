import React from 'react';

const PhotosInput = ({stateUpdate}) => (
  <div className="review-form-section">
    {/* A button will appear allowing users to upload their photos to the form.
      Clicking the button should open a separate window where the photo to be can be selected.
      After the first image is uploaded, a thumbnail showing the image should appear.  A user should be able to add up to five images before the button to add disappears, preventing further additions.

      TODO: CREATE A BUTTON THAT ADDS ANOTHER INPUT FIELD.
      CORRELATE THE INDEX OF THIS ELEMENT WITH THE POSITION IN THE ARRAY
      */}
    <label htmlFor="photos">Enter a photo url: </label>
    <input
      type="url"
      name="photos"
      placeholder="https://example.com"
      pattern="https://.*"
      onChange={
        (e)=>{
          stateUpdate('photos', e.target.files);
        }
      }
      required></input>
  </div>
);

export default PhotosInput;

