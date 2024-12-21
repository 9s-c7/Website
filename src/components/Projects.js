import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/fm.png";
import projImg2 from "../assets/img/sms.png";
import food from "../assets/img/food.png";
import projImg3 from "../assets/img/amz.png";
import cart from "../assets/img/cart.png"
import social from "../assets/img/social.png"
import bj from "../assets/img/bj.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './project.css';

export const Projects = () => {

  const projects = [
    // {
    //   title: "Full stack Real Estate App",
    //   description: "Full Stack Application",
    //   imgUrl: projImg1,
    //   link:"https://made2automate.vercel.app/home",
    {
      title: "Food Classification using InceptionResnetV2",
      description: "ML Application",
      imgUrl: food,
      link:"https://github.com/9s-c7/Food_classification",
    },
    {
      
      title: "Student Management System",
      //description: "Design & Development",
      imgUrl: projImg2,
      link:"https://github.com/9s-c7/Student_Managament_System",
    },
    {
      title: "Amazon Clone",
      //description: "Design & Development",
      imgUrl: projImg3,
      link:"https://github.com/9s-c7/Amazon_clone",
    },
    {
      title: "Social Media App",
      description: "Fully responsive with Dark Mode",
      imgUrl: social,
      link:"https://github.com/9s-c7/Social_Media_App"
    },
    {
      title: "Cart Application",
      // description: "Design & Development",
      imgUrl: cart,
      link:"https://github.com/9s-c7/Cart_Application",
    },
    {
      title: "Blackjack",
      description: "Interactive Game",
      imgUrl: bj,
      link:"https://github.com/9s-c7/Blackjack"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of my Projects!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                  </Nav>
                  <div class="center-container">
                    <h3>For more Projects, check out my Github account <a href="https://github.com/9s-c7">here.</a></h3>
                  </div>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

