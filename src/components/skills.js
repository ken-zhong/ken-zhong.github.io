import React from 'react';
import reduxLogo from '../assets/redux-logo.png';

const Experience = (props) => (
  <div className='modal'>
    <h2>Skills and Technologies</h2>
    <span className='btn-close-modal' onClick={props.closeModal}>✖</span>

    <main>
      <p>
        Here are some of the recent technologies that I have been working on.
        I'm always learning new technologies and ways to improve my code.
      </p>

      <div className='kz-devicon-container'>
        <i className='devicon-javascript-plain colored' />
        <i className='devicon-react-original-wordmark colored' />
        <span>
          <img src={reduxLogo} alt='' />
        </span>
        <i className='devicon-ruby-plain-wordmark colored' />
        <i className='devicon-rails-plain-wordmark colored' />
        <i className='devicon-nodejs-plain-wordmark colored' />
        <i className='devicon-express-original-wordmark' />
        <i className='devicon-postgresql-plain-wordmark colored' />
        <i className='devicon-mongodb-plain-wordmark colored' />

        <i className='devicon-webpack-plain-wordmark colored' />
        <i className='devicon-babel-plain colored' />
        <i className='devicon-heroku-plain-wordmark colored' />
        <i className='devicon-amazonwebservices-plain-wordmark colored' />

        <i className='devicon-atom-original-wordmark' />
        <i className='devicon-jquery-plain-wordmark colored' />
        <i className='devicon-html5-plain-wordmark colored' />
        <i className='devicon-css3-plain-wordmark colored' />
        <i className='devicon-bootstrap-plain-wordmark colored' />
        <i className='devicon-git-plain-wordmark colored' />
        <i className='devicon-github-plain-wordmark' />
      </div>
    </main>

  </div>
);

export default Experience
