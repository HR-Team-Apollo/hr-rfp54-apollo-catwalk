import React from 'react';

const Modal = ({modalContent, close}) => (
  <div style={{
    margin: '0',
    position: 'fixed',
    backgroundColor: '#000000e0',
    width: '100vw',
    height: '100vh',
    zIndex: '998'
  }}>
    <div className='modal' style={{
      height: '30rem',
      width: '30rem',
      backgroundColor: '#fff',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    }}>
      <div className='modal-header'>
        <button  onClick={close} style={{
          float: 'right',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#696969'
        }}><i className='fa fa-times'></i></button>
      </div>
      <div className='modal-body' style={{
        margin: '3rem auto'
      }}>
        {modalContent}
      </div>
    </div>
  </div>
);

export default Modal;