import React, {useState} from 'react';
import ModalContext from '../../../modalContext.js';
import CompareModal from './CompareModal.jsx';

const ActionButton = ({isStar}) => {

  let [isHover, setHover] = useState(false);

  if (isStar) {
    return (
      <ModalContext.Consumer>
        { value => (
          <div onMouseEnter={() => setHover(true)} onMouseLeave ={() => setHover(false)} onClick = {() => value(<CompareModal />)} style = {{position: 'absolute', right: '0.5em', top: '0.5em', color: 'yellow', cursor: 'pointer'}}>
            <i className={isHover ? 'fa fa-star' : 'fa fa-star-o'}></i>
          </div>
        )
        }
      </ModalContext.Consumer>
    );
  } else {
    return (
      <div style = {{position: 'absolute', right: '0.5em', top: '0.5em', color: 'red', fontFamily: 'arial', cursor: 'pointer'}}>
        <span>X</span>
      </div>
    );
  }
};

export default ActionButton;