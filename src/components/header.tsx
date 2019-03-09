import React from 'react'
import {Link} from "@reach/router";
import "../styles/header.css";

export default () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/experience"> Resume </Link>
    <Link to="/experience">Experience</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/projects">Projects</Link>
    <a href="https://github.com/shuqi7">GitHub</a>
  </nav>
)
