import React from 'react';

const Experience = (props) => (
  <div className='modal'>
    <h3>Modal</h3>
    <span className='btn-close-modal' onClick={props.closeModal}>✖</span>
  </div>
);

export default Experience;
