import React from 'react';

const Experience = props => (
  <div className="modal">
    <span className="btn-close-modal" onClick={props.closeModal}>
      ✖
    </span>
    <h2>Software Experience</h2>
    <main>
      <div className="experience-blurb">
        <span className="experience-company">Blink Health</span>
        <div className="experience-header">
          <span>Software Engineer</span>
          <span>2/2019 - present</span>
        </div>
        <ul className="experience-description">
          <li>
            Built and maintained features as a full-stack software engineer using Python 3/Django,
            React/Redux, PostgreSQL.
          </li>
          <li>
            Integrated internal Python microservices utilizing webhooks and AWS SQS queues for
            messaging.
          </li>
          <li>
            Implemented a new frontend API querying library and frontend cache in a large
            refactor/rewrite of internal pharmacy web app using React.
          </li>
          <li>
            Lead the development of a beta version of our front-end consumer pharmacy experience in
            main React/Redux desktop codebase.
          </li>
        </ul>
      </div>
      <div className="experience-blurb">
        <span className="experience-company">SumZero</span>
        <div className="experience-header">
          <span>Software Engineer</span>
          <span>1/2018 - 2/2019</span>
        </div>
        <ul className="experience-description">
          <li>
            Developed various features for SumZero as a full stack software engineer utilizing Ruby
            on Rails, JavaScript, React, MySQL, and GraphQL.
          </li>
          <li>
            Overhauled main search functionality with a multi-index ElasticSearch model,
            significantly improving both querying speed and result accuracy.
          </li>
          <li>
            Wrote backend unit tests with RSPEC and Capybara and frontend tests with Jest, Enzyme,
            and Storybook, improving test coverage and application reliability.
          </li>
          <li>
            Converted Angular 1.x with RESTful AJAX components into React/Redux components with
            GraphQL queries and mutations, improving maintainability and ease of deployment of
            future features.
          </li>
        </ul>
      </div>
    </main>

    <h2>Other Work Experience</h2>
    <main>
      {/* <div className="experience-blurb">
        <span className="experience-company">Testmasters</span>
        <div className="experience-header">
          <span>Instructor</span>
          <span>2/2016 - 9/2017</span>
        </div>
        <ul className="experience-description">
          <li>
            Taught live in-person classes for students preparing for the LSAT exam, as well as
            provided private one-on-one tutoring.
          </li>
        </ul>
      </div> */}
      <div className="experience-blurb">
        <span className="experience-company">Microsoft</span>
        <div className="experience-header">
          <span>Public Policy Fellow</span>
          <span>9/2013 - 9/2014</span>
        </div>
        <ul className="experience-description">
          <li>
            Researched and drafted memoranda on regulatory and policy issues in privacy,
            cyber-security, government surveillance, and telecommunications in support of
            Microsoft’s policy outreach.
          </li>
          <li>
            Created and maintained Microsoft’s internal legislative tracker to monitor and analyze
            Congressional legislation on government surveillance programs and privacy reform.
          </li>
        </ul>
      </div>
    </main>
  </div>
);

export default Experience;
