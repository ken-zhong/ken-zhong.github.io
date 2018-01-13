import React from 'react';

const Experience = (props) => (
  <div className='modal'>
    <span className='btn-close-modal' onClick={props.closeModal}>✖</span>
    <h2>Software Experience</h2>

    <main>
      <div className='experience-blurb'>
        <span className='experience-company'>SumZero</span>
        <div className='experience-header'>
          <span>Software Engineer</span>
          <span>1/2018 - present</span>
        </div>
        <ul className='experience-description'>
          <li>More details coming soon...</li>
          <li>More details coming soon...</li>
        </ul>
      </div>
    </main>

    <h2>Previous Experience</h2>
    <main>
      <div className='experience-blurb'>
        <span className='experience-company'>Testmasters</span>
        <div className='experience-header'>
          <span>Instructor</span>
          <span>2/2016 - 9/2017</span>
        </div>
        <ul className='experience-description'>
          <li>Taught live in-person classes for students preparing for the LSAT exam, as well as provided
private one-on-one tutoring, increasing student’s test scores by up to 20 percentile points</li>
        </ul>
      </div>

      <div className='experience-blurb'>
        <span className='experience-company'>Microsoft</span>
        <div className='experience-header'>
          <span>Public Policy Fellow</span>
          <span>9/2013 - 9/2014</span>
        </div>
        <ul className='experience-description'>
          <li>Researched and drafted memoranda on regulatory and policy issues in privacy, cyber-security,
government surveillance, and telecommunications in support of Microsoft’s policy outreach.</li>
          <li>Created and maintained Microsoft’s internal legislative tracker to monitor and analyze
Congressional legislation on government surveillance programs and privacy reform.</li>
        </ul>
      </div>

    </main>
  </div>
);

export default Experience;
