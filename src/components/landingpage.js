import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Photo from './Photo.png';

class Landing extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              //src={Photo}
               src="https://www.w3schools.com/w3images/avatar2.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr /> 
              <p>
                {" "}
                Javascript | Java | ReactJS | SpringBoot | MogoDB | PostgreSQL{" "}
              </p>

              <div className="social-links">
                {/* Linkedin */}
                <a
                  href="https://www.linkedin.com/in/liam-banga/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/liam345"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Email */}
                <a
                  href="mailto:liam205@outlook.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-envelope-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
