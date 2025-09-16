import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { FaPhone, FaGithub, FaLinkedinIn, FaFacebookF, FaYoutube, FaEnvelope } from "react-icons/fa";
import { Row, Col, Button, Container, Card, ProgressBar } from "react-bootstrap";
import { BsBoxArrowUpRight  } from "react-icons/bs";
import {
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiC,
  SiPhp,
  SiReact,
  SiNodedotjs,
  SiBootstrap,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaCode, FaServer, FaMobileAlt, FaPalette } from "react-icons/fa";

function App() {
  

  return (
    <>
      <Header/>

   <section id="home" className="hero d-flex align-items-center text-center text-white">
      <Container>
        <img
          src="rwwerew.jpg"
          alt="Kevin"
          className="rounded-circle shadow mb-3 profile-pic"
        />
        <h1 className="fw-bold hero-title">Kevin Puthussery</h1>
        <p className="lead hero-subtitle">MERN Full-Stack Development Intern</p>
        <a
          href="kevin_puthussery_resume.pdf"
          className="btn btn-lg btn-primary mt-3 shadow-lg"
        >
          Download CV
        </a>
      </Container>
    </section>

  <section className="section-container mt-4" id="about">
      <div className="text-center">
        <h2 className="section-title">About Me</h2>
        <hr
          className="mx-auto mb-4 text-black"
          style={{ width: "50px", borderTop: "3px solid #6c63ff" }}
        />
        <p className="mt-4 text-black">Learn more about who I am and what I do</p>

        <div className="about-text mt-4 px-3 text-black">
          <p>
            Seeking a position to utilise my skills in an organisation that
            offers professional growth while being resourceful, innovative and
            willing to work as a key player in a challenging and creative
            environment.
          </p>
          <p className="mt-3">
            Currently pursuing MERN full stack development course. When I'm not
            coding, you'll find me exploring foreign languages, music, and
            technology — fueling my creativity, drive, and enhancing my
            communication skills as well.
          </p>
        </div>
      </div>

      {/* Services / Skills Cards */}
      <div className="container-fluid mt-5 text-black">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="service-card text-center p-4 shadow-sm rounded bg-white h-100">
              <div className="service-icon mb-3 text-primary fs-2">
                <FaCode />
              </div>
              <h5 className="service-title">Web Development</h5>
              <p className="service-text text-black">
                Creating responsive and modern websites using HTML, CSS, and
                WordPress.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-card text-center p-4 shadow-sm rounded bg-white h-100">
              <div className="service-icon mb-3 text-success fs-2">
                <FaServer />
              </div>
              <h5 className="service-title">Backend Development</h5>
              <p className="service-text text-black">
                Experience in creating databases and queries in MySQL and
                PostgreSQL.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-card text-center p-4 shadow-sm rounded bg-white h-100">
              <div className="service-icon mb-3 text-warning fs-2">
                <FaMobileAlt />
              </div>
              <h5 className="service-title">Mobile Development</h5>
              <p className="service-text text-black">
                Developed web-based mobile apps using Android Studio SDK.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="service-card text-center p-4 shadow-sm rounded bg-white h-100">
              <div className="service-icon mb-3 text-danger fs-2">
                <FaPalette />
              </div>
              <h5 className="service-title">UI/UX Design</h5>
              <p className="service-text text-black">
                Designing intuitive and beautiful user interfaces and
                dashboards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  <section id="skills" className="skills-section py-5 text-center text-light">
      <Container>
        <h2 className="mb-3 fw-bold section-title">My Skills</h2>
        <p className="text-black">Technologies I work with</p>

        <Row className="mt-5 g-4">
          {/* Database Management */}
          <Col md={6} lg={3} className="text-start text-black">
            <h5 className="fw-bold mb-3">Database Management Systems</h5>
            <div className="skill-item">
              <SiMysql className="me-2 text-info" /> MySQL
              <ProgressBar now={70} className="mb-3" />
            </div>
            <div className="skill-item">
              <SiPostgresql className="me-2 text-primary" /> PostgreSQL
              <ProgressBar now={60} className="mb-3" />
            </div>
            <div className="skill-item">
              <SiMongodb className="me-2 text-success" /> MongoDB
              <ProgressBar now={40} className="mb-3" />
            </div>
          </Col>

          {/* Programming Languages */}
          <Col md={6} lg={3} className="text-start text-black">
            <h5 className="fw-bold mb-3">Programming Languages</h5>
            <div className="skill-item">
              <SiJavascript className="me-2 text-warning" /> JavaScript
              <ProgressBar now={30} className="mb-3" />
            </div>
            <div className="skill-item">
              <FaJava className="me-2 text-danger" /> Java
              <ProgressBar now={65} className="mb-3" />
            </div>
            <div className="skill-item">
              <SiC className="me-2 text-info" /> C
              <ProgressBar now={60} className="mb-3" />
            </div>
            <div className="skill-item">
              <SiPhp className="me-2 text-secondary" /> PHP
              <ProgressBar now={45} className="mb-3" />
            </div>
          </Col>

          {/* Frameworks & Libraries */}
          <Col md={6} lg={3} className="text-start text-black">
            <h5 className="fw-bold mb-3">Frameworks & Libraries</h5>
            <div className="skill-item">
              <SiReact className="me-2 text-info" /> ReactJS
              <ProgressBar now={55} className="mb-3" />
            </div>
            <div className="skill-item">
              <SiNodedotjs className="me-2 text-success" /> Node.js
              <ProgressBar now={45} className="mb-3" />
            </div>
            <div className="skill-item">
              <SiBootstrap className="me-2 text-primary" /> Bootstrap
              <ProgressBar now={50} className="mb-3" />
            </div>
            <div className="skill-item">
              <SiTailwindcss className="me-2 text-info" /> Tailwind CSS
              <ProgressBar now={75} className="mb-3" />
            </div>
          </Col>

          {/* Web Technologies */}
          <Col md={6} lg={3} className="text-start text-black">
            <h5 className="fw-bold mb-3">Web Technologies</h5>
            <div className="skill-item">
              <SiHtml5 className="me-2 text-danger" /> HTML
              <ProgressBar now={90} className="mb-3" />
            </div>
            <div className="skill-item">
              <SiCss3 className="me-2 text-primary" /> CSS
              <ProgressBar now={85} className="mb-3" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  <section id="projects" className="py-5 text-center">
      <Container>
        <h2 className="mb-4 section-title">Projects</h2>
        <Row className="g-4">
          {/* Card 1 */}
          <Col md={4}>
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="https://muffingroup.com/blog/wp-content/uploads/2023/06/SportsBlog.png"
                alt="GearUp"
              />
              <Card.Body>
                <Card.Title>GearUp E-Commerce</Card.Title>
                <Card.Text>
                  Sports e-commerce platform offering athletic gear and apparel.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://gear-up-sports-rref.vercel.app/"
                  target="_blank"
                  className="me-2"
                >
                  <BsBoxArrowUpRight className="me-1" /> Live Demo
                </Button>
                <Button
                  variant="outline-secondary"
                  href="https://github.com/Kevin-Puthussery/GearUp-Sports"
                  target="_blank"
                >
                  <FaGithub className="me-1" /> GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4}>
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="https://uicookies.com/wp-content/uploads/2019/05/fluence-html-bookstore-website-template.jpg"
                alt="Bookstore"
              />
              <Card.Body>
                <Card.Title>Online Book Store</Card.Title>
                <Card.Text>
                  A virtual bookstore where users can browse and purchase books.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://bookstore-rust-rho.vercel.app/"
                  target="_blank"
                  className="me-2"
                >
                  <BsBoxArrowUpRight  className="me-1" /> Live Demo
                </Button>
                <Button
                  variant="outline-secondary"
                  href="https://github.com/Kevin-Puthussery/Bookstore"
                  target="_blank"
                >
                  <FaGithub className="me-1" /> GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4}>
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/25/d4/95/caption.jpg?w=900&h=500&s=1"
                alt="Green Leaf"
              />
              <Card.Body>
                <Card.Title>Green Leaf</Card.Title>
                <Card.Text>
                  A Vegetarian Restaurant Website, built on HTML and CSS. Website is responsive
                  using media query for 600px screen size.
                </Card.Text>
                <Button
                  variant="outline-primary"
                  href="https://green-leaf-beta.vercel.app/"
                  target="_blank"
                  className="me-2"
                >
                  <BsBoxArrowUpRight className="me-1" /> Live Demo
                </Button>
                <Button
                  variant="outline-secondary"
                  href="https://kevin-puthussery.github.io/Green-Leaf/"
                  target="_blank"
                >
                  <FaGithub className="me-1" /> GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

{/* Certificates Section */}
      <section className="py-5 text-center">
        <h2 className="section-title">Certificates</h2>
        <hr
          className="mx-auto mb-4"
          style={{ width: "50px", borderTop: "3px solid #6c63ff" }}
        />
        <p className="section-subtitle text-black">
          My educational achievements and certifications
        </p>

        <Row className="g-4">
          <Col md={6} lg={3}>
            <div className="service-card">
              <img src="cert2.png" className="service-icon" alt="Power BI" />
              <h5 className="service-title">Power BI</h5>
              <p className="service-text">Data Visualization with Power BI</p>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div className="service-card">
              <img src="cert3.png" className="service-icon" alt="WordPress" />
              <h5 className="service-title">WordPress</h5>
              <p className="service-text">Website development using WordPress</p>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div className="service-card">
              <img src="cert4.png" className="service-icon" alt="Azure" />
              <h5 className="service-title">Azure</h5>
              <p className="service-text">Azure fundamentals & Cloud monitoring</p>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div className="service-card">
              <img src="cert5.png" className="service-icon" alt="Data Science" />
              <h5 className="service-title">Data Science</h5>
              <p className="service-text">Data Science with Python</p>
            </div>
          </Col>
        </Row>
      </section>

      {/* Contact Section */}
      <section className="text-center py-5" id="contact">
        <h2 className="section-title">Get in Touch</h2>
        <hr
          className="mx-auto mb-4"
          style={{ width: "50px", borderTop: "3px solid #6c63ff" }}
        />
        <p>Let's work together on your next project</p>
        <p>I'd love to hear from you! Drop me a line or connect with me on socials.</p>

        <div className="social-icons my-4">
          <a href="#"><FaPhone /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
        </div>

        <p className="fw-bold">Want to work together or have a question?</p>
        <Button className="btn-contact">
          <FaEnvelope className="me-2" /> Send Message
        </Button>
      </section>



<Footer/>
    </>
  )
}

export default App
