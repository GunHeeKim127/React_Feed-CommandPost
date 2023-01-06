import React from 'react';
import logo from '../images/logo.png';
import '../stylesheets/modal.css';

function Modal() {
  return (
    <div className="Modal">
      <header className="Modal-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='feed'>
        
      </div>
      <div className='CommandPost'>
        <input type='text'></input>
        <div className='clickButton'><p> | </p>전송</div>
      </div>
    </div>
  );
}

export default Modal;
