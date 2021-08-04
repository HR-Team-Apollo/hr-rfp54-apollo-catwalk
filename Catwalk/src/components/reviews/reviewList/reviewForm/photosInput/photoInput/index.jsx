import React from 'react';

const PhotoInput = ({index, stateUpdate})=>(
  <input
    type="url"
    name="photo"
    placeholder="https://example.com"
    style={{display:'block'}}
    pattern="https://.*"
    onChange={
      (e)=>{
        stateUpdate('photo', e.target.value, index);
      }
    }
    required></input>
);

export default PhotoInput;