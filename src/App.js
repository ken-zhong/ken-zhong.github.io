import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  renderMain () {
    return (
      <div className='main-content'>
        <h1>Hi, I'm Ken Zhong</h1>
        <h4>
          <a href='https://github.com/ken-zhong' target='_blank' rel='noopener noreferrer'>GITHUB</a>
          &nbsp;&nbsp;·&nbsp;&nbsp;<a href='#'>RESUME</a>
          &nbsp;&nbsp;·&nbsp;&nbsp;<a href='mailto:kenzhong@gmail.com'>KENZHONG@GMAIL.COM</a>
        </h4>

        <p>
          I'm a NYC-based full stack software engineer who's passionate about
          learning new things and creating experiences. I'm currently working with
          React/Redux and Ruby on Rails.
        </p>
        <p>
          When I'm not coding, I enjoy reading, photography, and playing tennis.
        </p>

        <ul>
          <li><span className='button-std'>Experience</span></li>
          <li><span className='button-std'>Recent Projects</span></li>
          <li><span className='button-std'>Skills</span></li>
        </ul>

        <footer>© Ken Zhong {new Date().getFullYear()}</footer>
      </div>
    );
  }

  renderModal (modal) {
    return null;
  }

  render () {
    return (
      <div className='App'>
        { this.state.showModal ? this.renderModal() : this.renderMain() }
      </div>
    );
  }
}

export default App;
