import React from 'react';

const Projects = (props) => (
  <div className='modal'>
    <h2>Recent Projects</h2>
    <span className='btn-close-modal' onClick={props.closeModal}>✖</span>
  </div>
);

export default Projects;
