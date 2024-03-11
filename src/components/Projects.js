import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/qr.png";
import projImg2 from "../assets/img/qumi.png";
import projImg3 from "../assets/img/p3.png";
import projImg4 from "../assets/img/disney.PNG";
import projImg5 from "../assets/img/commerce.PNG";
import projImg6 from "../assets/img/sneaker.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Projects = () => {

  const projects = [
    {
      title: "Qumi",
      description: "Queue Management Web App",
      imgUrl: projImg1,
    },
    {
      title: "Qumi Mobile",
      description: "Queue Management Mobile App",
      imgUrl: projImg2,
    },
    {
      title: "Pycle",
      description: "Car Rental App",
      imgUrl: projImg3,
    },
    {
      title: "Disney Hotstar Clone",
      description: "Disney Web App Clone",
      imgUrl: projImg4,
    },
    {
      title: "Commerce",
      description: "E-commerce Web App",
      imgUrl: projImg5,
    },
    {
      title: "Grealish Sneakers",
      description: "Sneaker Shop App",
      imgUrl: projImg6,
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
                <button>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</button>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
                    <Tab.Pane eventKey="second">
                      <a href="https://github.com/DavidLivingstoneHini?tab=repositories" target="_blank" rel="noreferrer"><p>See all projects on my Github page <ArrowRightCircle size={25} /></p></a>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <a href="https://github.com/DavidLivingstoneHini?tab=repositories" target="_blank" rel="noreferrer"><p>See all projects on my Github page <ArrowRightCircle size={25} /></p></a>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
