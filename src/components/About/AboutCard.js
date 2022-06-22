import React from "react";
import Card from "react-bootstrap/Card";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sirajeddine Aissa </span>
            from <span className="purple"> Tunis, Tunisia.</span>
            <br />I am an industrial engineering student at&nbsp;The National
            Institute of Applied Science and Technology
            <br />
            <br />I plan to start a unique business in the future, but still
            have no idea 😀
          </p>

          <p style={{ marginBlockEnd: 10, color: "rgb(155 126 172)" }}>
            "Theory is meaningless without practice."{""}
          </p>

          <footer className="blockquote-footer">Me</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
