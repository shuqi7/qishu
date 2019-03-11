import React from 'react'
import "../styles/about.css"

export default () => (
  <div className="about">
    <div className="article intro">
      <div className="container-12">
        <div className="title"> &mdash; Intro &mdash; </div>
        <div className="paragraph">
          Hi, this is Qi Shu. I'm currently a third-year student at the University of Waterloo, pursuing a Computer
          Science and Business Administration Double Degree.
        </div>
        <div className="paragraph">
          I am currently working as a front-end engineering intern at Imply in San Francisco Bay Area, where I utilized
          my skills in React & TypeScript to fulfil features and solve problems  I worked as a web developer
          in Winter 2018 at Ontario Investment Office. I did researches at UW for two past terms, in the fields of
          web application development in Node.js and compiler construction.
        </div>
        <div className="paragraph">
          I hope that I would have opportunities to work in different fields, be it in tech or finance, and
          explore different companies' culture, and find where my true passion lies eventually.
        </div>
        <div className="paragraph">
          If you should have any position which you find fit to me, please reach out to me through Email or
          LinkedIn. Thanks!
        </div>
      </div>
    </div>

    <div className="article experience">
      <div className="container-12">
        <div className="title"> &mdash; Work Experience &mdash; </div>
        <h3> Research Assistant - Compiler Construction </h3>
        <p className={"experience-para"}>Data System Group - University of Waterloo</p>
        <p className={"experience-para"}>Starting in 09/2018</p>
        <ul>
          <li>
            Compiling DBMS that has a simple extensible runtime and operates by translating SQL-like data
            manipulation requests directly to C code that interfaces with this runtime
          </li>
        </ul>
        <h3> Research Assistant - Web Application Development</h3>
        <p className={"experience-para"}>Human-Computer Interaction Lab - University of Waterloo</p>
        <p className={"experience-para"}>05/2018 - 08/2018</p>
        <ul>
          <li>
            Built an online crowdsourcing platform based on Node.js
          </li>
          <li>Parsed data with Python for analysis in NumPy to discover a more efficient online crowdsourcing
            strategy which is mutually beneficial to both parties
          </li>
        </ul>
        <h3> Web Developer</h3>
        <p className={"experience-para"}>Ontario Investment Office</p>
        <p className={"experience-para"}> 01/2017 - 04/2017</p>
        <ul>
          <li>Developing responsive table of content scripts which can be applied to all webpages of Ontario
            Investment Office
          </li>
          <li>Visualizing interactive data with d3.js library</li>
        </ul>
        <h3> Teaching Assistant</h3>
        <p className={"experience-para"}>University of Waterloo</p>
        <p className={"experience-para"}>09/2017 - 12/2017</p>
        <ul>
          <li>
            Marked weekly assignments and tests, and provide feedbacks to students and instructors
          </li>
        </ul>
      </div>
    </div>

    <div className="article skills">
      <div className="container-12">
        <div className="title"> &mdash; Skills &mdash; </div>
        <div className="grid-6" id="hard-skills">
          <h3> Hard Skills </h3>
          <h4> Programming Language </h4>
          <ul>
            <li>C++/C</li>
            <li>Java</li>
            <li>Python</li>
            <li>Scheme</li>
            <li>HTML/CSS/JavaScript</li>
            <li>Bash</li>
            <li>SQL</li>
            <li>VBA</li>
          </ul>
          <h4> Library/Framework </h4>
          <ul>
            <li>NumPy, Pandas</li>
            <li>React Native/ReactJS, Node.js, jQuery, Bootrstrap, AngularJS</li>
            <li>THREE.js/WebGL, d3.js, highcharts.js</li>
          </ul>
          <h4> Operating System </h4>
          <ul>
            <li>Linux/Unix</li>
            <li>Windows</li>
            <li>Mac</li>
            <li>iOS</li>
            <li>Android</li>
          </ul>
        </div>
        <div className="grid-6" id="soft-skills">
          <h3> Soft Skills </h3>
          <ul>
            <li>Excellent Communication</li>
            <li>Project-leading Experiences</li>
            <li>Fast Thinking</li>
            <li>Problem-solving and solution-designing skills</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)