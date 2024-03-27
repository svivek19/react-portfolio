import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
// projects imports
import Blog from "../assets/projects/blog.png";
import ecommerce from "../assets/projects/e-commerce.png";
import bmi from "../assets/projects/bmi.png";
import currency from "../assets/projects/corrency.png";
import weather from "../assets/projects/weather.png";
import food from "../assets/projects/food.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="Blog Website"
              ghLink="https://github.com/svivek19/react-blog-app.git"
              demoLink="https://react-blog-vivek.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce Website"
              ghLink="https://github.com/svivek19/react-ecommerce.git"
              demoLink="https://react-dress-shop-ecommerce-vvk.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Recipe Finder"
              ghLink="https://github.com/svivek19/recipe-finder-react.git"
              demoLink="https://recipe-finder-vivek.netlify.app/"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Real Time Currency Converter"
              ghLink="https://github.com/svivek19/react-currency-converter.git"
              demoLink="https://currency-converter-vivek.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather app"
              ghLink="https://github.com/svivek19/react-weather-app.git"
              demoLink="https://react-weather-app-vivek.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bmi}
              isBlog={false}
              title="BMI Calculator"
              ghLink="https://github.com/svivek19/react-bmi-calculator.git"
              demoLink="https://bmi-calculator-vivek.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
