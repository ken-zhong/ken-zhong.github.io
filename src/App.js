import React, { Component } from 'react';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
import './App.css';
import './Modal.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  openModal (modal) {
    this.setState({showModal: modal});
  }

  closeModal () {
    this.setState({showModal: false});
  }

  renderMain () {
    return (
      <div className='main-content'>
        <h1>Hi, I'm Ken Zhong</h1>
        <h4>
          <a href='https://github.com/ken-zhong' target='_blank' rel='noopener noreferrer'>GITHUB</a>
          &nbsp;&nbsp;·&nbsp;&nbsp;<a href='#'>RESUME</a>
        &nbsp;&nbsp;·&nbsp;&nbsp;<a href='mailto:kenzhong@gmail.com'>EMAIL ME</a>
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
          <li><span className='button-std' onClick={() => this.openModal('experience')}>Experience</span></li>
          <li><span className='button-std' onClick={() => this.openModal('projects')}>Recent Projects</span></li>
          <li><span className='button-std' onClick={() => this.openModal('skills')}>Skills</span></li>
        </ul>

        <footer>© Ken Zhong {new Date().getFullYear()}</footer>
      </div>
    );
  }

  renderModal () {
    switch (this.state.showModal) {
      case 'skills': return <Skills closeModal={this.closeModal.bind(this)} />;
      case 'experience': return <Experience closeModal={this.closeModal.bind(this)} />;
      case 'projects': return <Projects closeModal={this.closeModal.bind(this)} />;
      default: return 'ERROR';
    }
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
