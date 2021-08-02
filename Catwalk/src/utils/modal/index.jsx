import React from 'react';

const Modal = ({modalContent, close}) => (
  <div style={{
    margin: '0',
    position: 'fixed',
    top: '0',
    backgroundColor: '#000000e0',
    width: '100vw',
    height: '100vh',
    zIndex: '998'
  }}>
    <div className='modal' style={{
      margin: '3rem auto',
      height: '80vh',
      width: 'fit-content',
      maxWidth: '90vw',
      backgroundColor: 'inherit',
      padding: '2rem'
    }}>
      <div className='modal-header'>
        <button  className='clickMe' onClick={close} style={{
          float: 'right',
          backgroundColor: 'transparent',
          border: 'none',
          color: '#696969'
        }}><i className='fa fa-times'></i></button>
      </div>
      <div className='modal-body' style={{
        margin: '3rem auto',
        height: '80%',
        overflowY: 'scroll'
      }}>
        {modalContent}
      </div>
    </div>
  </div>
);

export default Modal;