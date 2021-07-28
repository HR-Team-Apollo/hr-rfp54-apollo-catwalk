import React from 'react';
import Style from './Style';

const StyleSelector = () => (
  <div id='style-selector'>
    <h3>Style &gt; <span>Selected Style</span></h3>
    <ul>
      <Style />
      <Style />
      <Style />
      <Style />
      <Style />
      <Style />
      <Style />
      <Style />
    </ul>
  </div>
);

export default StyleSelector;