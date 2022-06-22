import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://drive.google.com/file/d/1GOIMIo2h9mRFJCUJ_WbOxBNrbuayQwxR/view"
          >
            <AiOutlineDownload />
            &nbsp;Check My CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Professional Experience</h3>
            <Resumecontent
              title="Full-stack Developer at CONSULTING @ LOGICIELS SYSTÈMES"
              date="December 2021 - Present"
              content={[
                "Working on the back-end side of a German platform that manages accounting-related informations.",
                "Interacting with the client to see if the requested feature is working according to their needs.",
                "Fixeing inspected bugs on the platform."
              ]}
            />
            <Resumecontent
              title="Front-end Engineer at Junior Entreprise INSAT"
              date="November 2021 - Present"
              content={[
                "Working on a platform that facilitates the affiliation of rural women to the social and health coverage system and helps leverage the payment of expenses remotely."
              ]}
            />
            <Resumecontent
              title="Web Developer Intern at The Sparks Foundation"
              date="August 2021"
              content={[
                "Provided a donation functionality for the user that will land them on a payment window to provide the amount to donate and the payment type.",
                " Made it possible to generate an invoice containing the amount donated and other payment details and email it to the user post-donation.",
              ]}
            />
            <Resumecontent
              title="AWS Machine Learning Scholar at Udacity"
              date="July 2021 - October 2021"
              content={[
                "Introduced to the Amazon Web Services platform and its Machine Learning tools.",
              ]}
            />
            <h3 className="resume-title">Volunteering Experience</h3>
            <Resumecontent
              title="Webmaster at INSAT IEEE Student Branch"
              date="August 2021 - Present"
              content={[
                "Head of the Webmasters' department.",
                "Responsible for creating and managing INSAT IEEE's Student Branch website as well as monitoring and supervising other Webmasters in IEEE's chapters.",
              ]}
            />
            <Resumecontent
              title="Competitive Programming Problem Setter at INSAT ACM Student Chapter "
              date="November 2020 - April 2021"
              content={[
                "Contributed to the SheSolves programming event hosted at the National Institute of Applied Science and Technology, by creating and testing competitive programming problems.",
              ]}
            />
            <Resumecontent
              title="Media Creator at INSAT ACM Student Chapter "
              date="November 2020 - April 2021"
              content={["Operated as a photo and video editor."]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Industrial Engineering at the National Institute of Applied Science and Technology (INSAT)"
              date="2019 - Present"
              content={[]}
            />
            <Resumecontent
              title="Amal Highschool"
              date="2015 - 2017"
              content={[
                "Baccalaureate in Computer Science achieved with a score of 16.30/20, ranked 12th countrywide. ",
              ]}
            />
            <h3 className="resume-title">Achievements</h3>
            <Resumecontent
              title="IEEEXtreme, The 24-hour Programming Competition"
              date="October 2020"
              content={["Ranked 15th countrywide and 389th worldwide."]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}></Row>
      </Container>
    </Container>
  );
}

export default Resume;
