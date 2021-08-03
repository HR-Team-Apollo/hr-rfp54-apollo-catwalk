import React from 'react';
import AppContext from '../../../../../appContext.js';


const CharacteristicsInput = ({stateUpdate}) => (
  <div className="review-form-section characteristics">
    <AppContext.Consumer>
      {({characterDescriptions, product})=>(
        Object.keys(product.characteristics).map((ch, i)=>(
          <div className={ch} key={i} data={product.characteristics.id} style={{margin: '.5rem 0', textAlign: 'center', border: '1px solid grey', padding:'.5rem'}}>
            <strong>{ch}</strong>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div className='selectionText'>None Selected</div>
              <div className='radioBtns' style={{display: 'flex', justifyContent: 'space-between'}}>
                {characterDescriptions[ch].map((choice, j) => (
                  <input type='radio' name={ch} value={j + 1} key={j} onClick={
                    (e)=>{
                      let charObj = {};
                      charObj[`${product.characteristics[ch].id}`] = j + 1;
                      const selectionTextEl = e.target.parentElement.previousSibling;
                      selectionTextEl.innerText = choice;
                      stateUpdate('characteristics', charObj);
                      stateUpdate('product_id',product['product_id']);
                    }
                  }/>
                ))}
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>{characterDescriptions[ch][0]}</span>
                <span>{characterDescriptions[ch][4]}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </AppContext.Consumer>
  </div>
);

export default CharacteristicsInput;