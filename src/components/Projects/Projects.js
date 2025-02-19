import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Gift from "../../Assets/Projects/WordXPDF.png";
import bitsOfCode from "../../Assets/Projects/MemoryAtlas.png";
import blog from "../../Assets/Projects/CryptoTracker.png";
import care from "../../Assets/Projects/Priya-Portfolio.png";


const projects = [
  
  {
    imgPath: blog,
    isBlog: false,
    title: "CryptoTracker",
    description: "React.js and Node.js with Express power my crypto tracker, while MongoDB ensures secure data storage. CoinGecko API enables real-time price updates, and Tailwind CSS enhances the UI. Users can track top cryptocurrencies, manage a watchlist, and explore market trends.",
    ghLink: "https://github.com/priyagupta72/CryptoTraker",
    demoLink: "https://profound-bombolone-c626b5.netlify.app/",
    technologies: ["React", "Node.js", "MongoDB"],
    
  },
  {
    imgPath: bitsOfCode,
    isBlog: false,
    title: "MemoryAtlas",
    description: "React.js and Node.js with Express power my social media app, while MongoDB ensures efficient data storage. Leaflet enables interactive map tracking, and Material UI enhances the UI. Users can create, update, like, and comment on travel memories, fostering engagement..",
    ghLink: "https://github.com/priyagupta72/MemoryAtlas",
    demoLink: "https://astounding-zuccutto-93b66a.netlify.app/posts",
    technologies: ["React.js", "Node.js", "MongoDB"],
    
  },
  {
    imgPath: care,
    isBlog: false,
    title: "Priya's Portfolio",
    description: "React.js and Node.js power my portfolio website, showcasing projects, skills, and experience. With a modern, responsive design, it features sections for my resume, project portfolio, and contact details, highlighting my full-stack expertise..",
    ghLink: "https://github.com/priyagupta72/Priya-Portfolio",
    demoLink: "https://dapper-cajeta-0b6194.netlify.app/project",
    technologies: ["React.js", "Node.js", "MongoDB"],
    
  },
  {
    imgPath: Gift,
    isBlog: false,
    title: "WordXPDF",
    description: "React.js and Node.js with Express power my document converter, while LibreOffice CLI ensures accurate Word-to-PDF conversion. Tailwind CSS enhances the UI, and Multer handles secure file uploads. Users can convert, track progress, and download PDFs instantly.",
    ghLink: "https://github.com/priyagupta72/WordXPDF",
    demoLink: "https://mellifluous-dango-44264d.netlify.app/",
    technologies: ["React.js", "Node.js", "MongoDB"],

  }
];

function Projects() {
  const [selectedCategory, ] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <Container fluid className="project-section">
     
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                technologies={project.technologies}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;