import React from 'react';
import reduxLogo from '../assets/redux-logo.png';

const Experience = (props) => (
  <div className='modal'>
    <h3>Modal</h3>
    <span className='btn-close-modal' onClick={props.closeModal}>✖</span>

    <div className='kz-devicon-container'>
      <i className='devicon-javascript-plain colored'></i>
      <i className='devicon-react-original-wordmark colored'></i>
      <span>
        <img src={reduxLogo} alt='' />
      </span>
      <i className='devicon-ruby-plain-wordmark colored'></i>
      <i className='devicon-rails-plain-wordmark colored'></i>
      <i className='devicon-nodejs-plain-wordmark colored'></i>
      <i className='devicon-express-original-wordmark'></i>
      <i className='devicon-postgresql-plain-wordmark colored'></i>
      <i className='devicon-mongodb-plain-wordmark colored'></i>

      <i className='devicon-webpack-plain-wordmark colored'></i>
      <i className='devicon-babel-plain colored'></i>
      <i className='devicon-heroku-plain-wordmark colored'></i>
      <i className='devicon-amazonwebservices-plain-wordmark colored'></i>

      <i className='devicon-atom-original-wordmark'></i>
      <i className='devicon-jquery-plain-wordmark colored'></i>
      <i className='devicon-html5-plain-wordmark colored'></i>
      <i className='devicon-css3-plain-wordmark colored'></i>
      <i className='devicon-bootstrap-plain-wordmark colored'></i>
      <i className='devicon-git-plain-wordmark colored'></i>
      <i className='devicon-github-plain-wordmark'></i>
    </div>

  </div>
);

export default Experience
