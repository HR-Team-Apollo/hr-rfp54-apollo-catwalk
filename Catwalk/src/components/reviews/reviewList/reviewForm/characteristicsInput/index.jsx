import React from 'react';
import AppContext from '../../../../../appContext.js';


const CharacteristicsInput = () => (
  <div className="review-form-section characteristics">
    <AppContext.Consumer>
      {({characteristicsChart})=>(
        Object.entries(characteristicsChart).map((ent, i)=>(
          <div className={ent[0]} key={i} style={{margin: '.5rem 0', textAlign: 'center', border: '1px solid grey', padding:'.5rem'}}>
            <strong>{ent[0]}</strong>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div className='selectionText'>None Selected</div>
              <div className='radioBtns' style={{display: 'flex', justifyContent: 'space-between'}}>
                {ent[1].map((choice, j) => (
                  <input type='radio' name={`${ent[0]}`} value={j + 1} key={j} onClick={
                    (e)=>{
                      const selectionTextEl = e.target.parentElement.previousSibling;
                      selectionTextEl.innerText = choice;
                    }
                  }/>
                ))}
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>{ent[1][0]}</span>
                <span>{ent[1][4]}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </AppContext.Consumer>
  </div>
);

export default CharacteristicsInput;