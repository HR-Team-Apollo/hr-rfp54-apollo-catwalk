import React, {useState} from 'react';

const AddOutfitCard = () => {
  let [isHover, setHover] = useState(false);
  let backColor = isHover ? 'rgb(205, 205, 205)' : 'rgb(227, 227, 227)';

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style = {{flexBasis: '10.5em', margin: '0 1.4%', position: 'relative', backgroundColor: backColor, cursor: 'pointer', minWidth: '10.5em'}}>
      <span style = {{position: 'relative', fontSize: '6em', fontWeight: '900', left: '32%', top: '12%'}}>+</span>
      <h3 style = {{position: 'relative', fontSize: '1.7em', fontWeight: '900', textAlign: 'center', top: '10%'}}>Add to Outfit</h3>
    </div>
  );
};

export default AddOutfitCard;