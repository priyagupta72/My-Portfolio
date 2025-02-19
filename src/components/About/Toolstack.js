import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ color: "#007ACC" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{ color: "#FF6C37" }} />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
