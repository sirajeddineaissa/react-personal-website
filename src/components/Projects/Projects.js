import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import WipeLacer from "../../Assets/Projects/WipeLacer.png";
import Reddiper from "../../Assets/Projects/Reddiper.jpg";
import SaveAfrica from "../../Assets/Projects/SaveAfrica.png";
import MIMO from "../../Assets/Projects/MIMO.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WipeLacer}
              isBlog={false}
              title="WipeLacer"
              description="A type-racing web app built with React and Firebase. The user is provided with Start and Practice sections where they're prompted to write down generated quotes in a certain amount of time and get their WPM/Accuracy results. Each user will have their matches and results saved. A future online implementation will be considered."
              link="https://github.com/sirajeddineaissa/WipeLacer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Reddiper}
              isBlog={false}
              title="Reddiper"
              description="A desktop app that scrapes content from reddit and saves it locally (for the moment, only images). Made with Python, OpenCV, PySimpleGUI and the Reddit API Wrapper."
              link="https://github.com/sirajeddineaissa/Reddiper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SaveAfrica}
              isBlog={false}
              title="SaveAfrica"
              description="A donation website made with HTML5, CSS3 and Vanilla JavaScript for the frontend, and Razorpay for the payment gateway integration."
              link="https://github.com/sirajeddineaissa/SaveAfrica.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MIMO}
              isBlog={false}
              title="MIMO"
              description="A Memory Card Game made with Vanilla JavaScript."
              link="https://github.com/sirajeddineaissa/MIMO"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
