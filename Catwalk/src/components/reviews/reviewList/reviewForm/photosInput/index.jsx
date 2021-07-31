import React from 'react';

const PhotosInput = ({stateUpdate}) => (
  <div className="review-form-section">
    {/* A button will appear allowing users to upload their photos to the form.
      Clicking the button should open a separate window where the photo to be can be selected.
      After the first image is uploaded, a thumbnail showing the image should appear.  A user should be able to add up to five images before the button to add disappears, preventing further additions.
      */}
    <label htmlFor="photos">Upload photos: </label>
    <input
      type="file"
      name="photos"
      id="photos"
      accept="image/png, image/jpeg"
      multiple
      onChange={
        (e)=>{
          stateUpdate('photos', e.target.files);
        }
      }
    />
  </div>
);

export default PhotosInput;

