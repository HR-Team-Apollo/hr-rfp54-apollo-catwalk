import React, {useState} from 'react';
import PhotoInput from './photoInput';

const PhotosInput = ({stateUpdate}) => {
  let [photoEls, setPhotoEls] = useState([]);
  let photoLimit = 4;
  return (<div className="review-form-section">
    {/* A button will appear allowing users to upload their photos to the form.
      Clicking the button should open a separate window where the photo to be can be selected.
      After the first image is uploaded, a thumbnail showing the image should appear.  A user should be able to add up to five images before the button to add disappears, preventing further additions.

      TODO: CREATE A BUTTON THAT ADDS ANOTHER INPUT FIELD.
      CORRELATE THE INDEX OF THIS ELEMENT WITH THE POSITION IN THE ARRAY
      */}
    <label htmlFor="photos">Photos: </label>
    {
      photoEls
    }
    <button
      className='clickMe'
      onClick={
        (e)=>{
          e.preventDefault();
          console.log(photoEls);
          if (photoEls.length <= photoLimit) {
            setPhotoEls([...photoEls, <PhotoInput key={photoEls.length} index={photoEls.length} stateUpdate={stateUpdate}/>]);
          }
          if(photoEls.length === 4) {
            e.target.remove();
          }
        }
      }>Add Photo</button>
  </div>);
};

export default PhotosInput;

