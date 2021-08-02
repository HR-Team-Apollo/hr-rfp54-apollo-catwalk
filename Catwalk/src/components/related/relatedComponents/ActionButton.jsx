import React, {useState} from 'react';
import AppContext from '../../../appContext.js';
import CompareModal from './CompareModal.jsx';

const ActionButton = ({isStar, chars, removeOutfit}) => {

  let [isHover, setHover] = useState(false);

  if (isStar) {
    return (
      <AppContext.Consumer>
        { context => (
          <div onMouseEnter={() => setHover(true)} onMouseLeave ={() => setHover(false)} onClick = {() => context.openModal(<CompareModal compareChars = {chars}/>)} style = {{position: 'absolute', right: '0.5em', top: '0.5em', color: 'yellow', cursor: 'pointer'}}>
            <i className={isHover ? 'fa fa-star' : 'fa fa-star-o'}></i>
          </div>
        )
        }
      </AppContext.Consumer>
    );
  } else {
    return (
      <div onClick = {() => removeOutfit(chars)} style = {{position: 'absolute', right: '0.5em', top: '0.5em', color: 'red', fontFamily: 'arial', cursor: 'pointer'}}>
        <span>X</span>
      </div>
    );
  }
};

export default ActionButton;