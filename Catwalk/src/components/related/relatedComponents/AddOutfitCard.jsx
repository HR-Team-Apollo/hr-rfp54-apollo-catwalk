import React, {useState} from 'react';

const AddOutfitCard = ({id, addProductToOutfit}) => {
  let [isHover, setHover] = useState(false);
  let backColor = isHover ? 'rgb(205, 205, 205)' : 'rgb(227, 227, 227)';

  return (
    <div onClick = {() => addProductToOutfit(id)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style = {{flexBasis: '11em', margin: '0 1.4%', position: 'relative', backgroundColor: backColor, cursor: 'pointer', minWidth: '11em', height: '16em'}}>
      <div style = {{width: '100%', display: 'flex'}}>
        <span style = {{fontSize: '6em', fontWeight: '900', flex: '1', textAlign: 'center', marginTop: '0.35em'}}>+</span>
      </div>
      <div style ={{display: 'flex'}}>
        <h3 style = {{position: 'relative', fontSize: '1.7em', fontWeight: '900', textAlign: 'center', top: '10%', margin: 'auto'}}>Add to Outfit</h3>
      </div>
    </div>
  );
};

export default AddOutfitCard;