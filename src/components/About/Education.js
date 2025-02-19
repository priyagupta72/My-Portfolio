import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa"; 

function Education() {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out",
  };

  const iconStyle = { fontSize: "3.5rem", color: "#6C63FF" };

  const textStyle = {
    marginTop: "10px",
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  const descStyle = {
    fontSize: "1rem",
    color: "#ddd",
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={12} className="education-text">
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Education</strong>
        </h1>
      </Col>

      <Row style={{ justifyContent: "center" }}>
        <Col xs={6} md={3} style={cardStyle}>
          <FaGraduationCap style={iconStyle} />
          <h5 style={textStyle}>B.Tech (2021-2025)</h5>
          <p style={descStyle}>BBDITM, Lucknow</p>
        </Col>

        <Col xs={6} md={3} style={cardStyle}>
          <FaUniversity style={iconStyle} />
          <h5 style={textStyle}>Intermediate (2019-2020)</h5>
          <p style={descStyle}>R.P.M Academy, Gorakhpur</p>
        </Col>

        <Col xs={6} md={3} style={cardStyle}>
          <FaSchool style={iconStyle} />
          <h5 style={textStyle}>High School (2017-2018)</h5>
          <p style={descStyle}>Little Scholar Academy, Gorakhpur</p>
        </Col>
      </Row>
    </Row>
  );
}

export default Education;
