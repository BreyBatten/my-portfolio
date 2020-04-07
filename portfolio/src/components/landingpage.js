import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }} className="landing-page">
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="name">
              <h1>Aubrey "Brey" Batten</h1>
              <p className="definition">
                PROGRAMMER: (n.) a person who solves problems you never knew you
                had, in ways you don't understand
              </p>
              <div className="banner">
                <h2>Full Stack Web Developer</h2>
                <hr />
                <p>
                  Git/GitHub | HTML/CSS | JavaScript | React | Redux | NodeJS |
                  Express | SQL | PostgresQL
                </p>
              </div>
              <div className="social-links">
                <a href="https://github.com/BreyBatten" target="_blank">
                  <i className="fa fa-github-square" />
                </a>
                <a
                  href="https://www.linkedin.com/in/brey-batten-954661181/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin" />
                </a>
                <a href="https://twitter.com/breybat10" target="_blank">
                  <i className="fa fa-twitter-square" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
