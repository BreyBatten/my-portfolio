import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu
} from "react-mdl";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="about-grid" style={{ padding: "10px" }}>
          <Card shadow={5} style={{ minWidth: "50%", margin: "auto" }}>
            <CardText
              style={{
                color: "black",
                margin: "auto",
                fontSize: "1.6em",
                padding: "30px"
              }}
            >
              Name: Aubrey "Brey" Batten
            </CardText>
            <CardText
              style={{
                color: "black",
                margin: "auto",
                fontSize: "1.2em",
                lineHeight: "1.6em"
              }}
            >
              I am a Full-Stack Developer eager to break into tech and make an
              impact! I am currently a student at Lambda School, learning
              computer science and full stack web development. Lambda is a fully
              online school, so I have gained months of experience working on a
              team remotely. My previous work experience, while not tech
              related, will be very beneficial to me as I begin my journey in
              the software world. I have worked in the hospitality industry for
              over 8 years. More specifically, I work in recreation as the
              supervisor of a zipline course. By having these jobs, I have
              learned how to communicate effectively, while working with and
              leading a team. I can't wait to break into tech and begin this
              exciting career.
            </CardText>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="about-grid" style={{ padding: "10px" }}>
          <Card shadow={5} style={{ minWidth: "50%", margin: "auto" }}>
            <CardText
              style={{
                color: "black",
                margin: "auto",
                fontSize: "1.6em",
                padding: "30px"
              }}
            >
              Front-End Languages
            </CardText>
            <CardText
              style={{
                color: "black",
                margin: "auto",
                fontSize: "1.2em",
                lineHeight: "1.6em"
              }}
            >
              HTML/CSS - JavaScript - React - Redux
            </CardText>
            <CardText
              style={{
                color: "black",
                margin: "auto",
                fontSize: "1.6em",
                padding: "30px"
              }}
            >
              Back-End Languages (where it's at!!)
            </CardText>
            <CardText
              style={{
                color: "black",
                margin: "auto",
                fontSize: "1.2em",
                lineHeight: "1.6em"
              }}
            >
              NodeJS - Express - SQL - PostgresQL - MongoDB - Swagger
            </CardText>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="about-grid" style={{ padding: "10px" }}>
          <Card shadow={5} style={{ minWidth: "50%", margin: "auto" }}>
            <CardText
              style={{
                color: "black",
                margin: "auto",
                fontSize: "1.6em",
                padding: "30px"
              }}
            >
              Soft Skills
            </CardText>
            <CardText
              style={{
                color: "black",
                margin: "auto",
                fontSize: "1.2em",
                lineHeight: "1.6em"
              }}
            >
              Driven - Hard Working - Reliable - Effective Communicator - Leader
            </CardText>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Personal Info</Tab>
            <Tab>Languages</Tab>
            <Tab>Soft-Skills</Tab>
          </Tabs>

          <section>
            <Grid>
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
