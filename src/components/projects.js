import React from 'react';

const Projects = (props) => (
  <div className='modal'>
    <h2>Recent Projects</h2>
    <span className='btn-close-modal' onClick={props.closeModal}>✖</span>

    <main>
      <div className='project-item'>Pxl-On
        <div className='project-img'> image here </div>
        <div className='project-description'>
          <p>A full stack photo sharing app inspired by 500px and Instagram, built using
            React/Redux on the frontend and a Ruby on Rails RESTful API.
            <a href='https://pxl-on.herokuapp.com/' rel='noopener noreferrer' target='_blank'>Live</a> |
            <a href='https://github.com/ken-zhong/pxl-On' rel='noopener noreferrer' target='_blank'>Repo</a>
          </p>
        </div>
      </div>

      <div className='project-item'>Plasmaforce
        <div className='project-img'> image here </div>
        <div className='project-description'>
          <p>A sidescrolling 2d space shooter built using JavaScript, HTML5, and lots of
            object-oriented programming.
            <a href='https://ken-zhong.github.io/plasmaforce/' rel='noopener noreferrer' target='_blank'>Live</a> |
            <a href='https://github.com/ken-zhong/plasmaforce' rel='noopener noreferrer' target='_blank'>Repo</a>
          </p>
        </div>
      </div>

      <div className='project-item'>Pictus Whiteboard
        <div className='project-img'> image here </div>
        <div className='project-description'>
          <p>A whiteboarding app that connects users together with WebSockets and allows them to
            collaborate and draw together on a whiteboard. Built with Node/Express, MongoDB, and
            Socket.io.
            <a href='https://pictus-whiteboard.herokuapp.com/' rel='noopener noreferrer' target='_blank'>Live</a> |
            <a href='https://github.com/ken-zhong/pictus' rel='noopener noreferrer' target='_blank'>Repo</a>
          </p>
        </div>
      </div>
    </main>
  </div>
);

export default Projects;
