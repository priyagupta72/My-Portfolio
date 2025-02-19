import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone! I'm <span className="purple"> PRIYA  </span>
             from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am a <span className="purple"> MERN Stack Developer </span> with expertise in React.js, Express.js, Node.js, and MongoDB. I specialize in building scalable, user-friendly applications with API integration, authentication, and real-time features while ensuring a responsive and intuitive UI design.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
