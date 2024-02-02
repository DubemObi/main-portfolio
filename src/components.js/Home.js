import React from "react";
import "./Home.css";
import vizi from "../img/Screenshot (114).png";
import landingPage from "../img/Screenshot (80).png";
import nexcent from "../img/Screenshot (133).png";
import markdownPreviewer from "../img/Screenshot (83).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faArrowRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import passportImg from "../img/IMG-20190509-WA0045 Passport.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenu: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu() {
    this.setState((state) => {
      if (!state.isMenu) {
        return { isMenu: true };
      } else {
        return { isMenu: false };
      }
    });
  }
  render() {
    const menuBar = (
      <div id="full-menubar">
        <div id="menubar">
          <FontAwesomeIcon
            icon={faXmark}
            id="menubar-icon"
            onClick={this.handleMenu}
          />
          <ul id="new-nav-links">
            <a href="#hero" onClick={this.handleMenu}>
              <li>Home</li>
            </a>
            <a href="#projects" onClick={this.handleMenu}>
              <li>Projects</li>
            </a>
            <a href="#contact" onClick={this.handleMenu}>
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div id="behind-menubar" onClick={this.handleMenu}></div>
      </div>
    );
    return (
      <div>
        {this.state.isMenu ? menuBar : !menuBar}
        <nav id="navbar-phone">
          <FontAwesomeIcon
            icon={faBars}
            id="nav-icon"
            onClick={this.handleMenu}
          />
          <div id="header">
            <h2>WELCOME</h2>

            <img src={passportImg} alt="" id="passportImg" />
          </div>
        </nav>
        <nav id="navbar">
          <div id="header">
            <img src={passportImg} alt="" id="passportImg" />

            <h2>WELCOME</h2>
          </div>
          <ul id="nav-links">
            <a href="#hero">
              <li>Home</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
        <section id="hero">
          <div id="hero-div">
            <h1 id="main-text" data-aos="fade-right" data-aos-duration="1000">
              I <span id="create-text">create</span> awesome digital products
            </h1>
            <p id="smaller-text" data-aos="fade-right">
              An experienced software developer skilled in React.js with a
              strong analytical mindset and problem-solving abilities.
            </p>
            <a href=".contact">
              <button
                id="hero-button"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                Get In Touch
              </button>
            </a>
          </div>
        </section>
        <section id="about">
          <div id="about-div">
            {/* <h2 id="about-text">About me 👨🏽‍💻</h2> */}
            <h2 id="about-text" data-aos="fade-right">
              About me &#x1F4A1;
            </h2>
            <div id="about-content" data-aos="fade-left">
              <p>
                Hi, I am Dubem, a well-trained software developer skilled in
                React.js with a strong analytical mindset and problem-solving
                abilities. I am proficient in front-end and back-end web
                development, I excel in translating complex concepts into
                user-friendly software solutions.{" "}
              </p>
            </div>
          </div>
        </section>
        <section id="projects">
          <h1 id="projects-text">Projects</h1>
          <div id="project-div">
            <a
              href="https://voting-app-psi-pearl.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div id="project-bag" data-aos="zoom-in">
                <img src={vizi} alt="barrel-page" />
                <div id="project-name">
                  <p>Vizi Website</p>
                </div>
              </div>
            </a>
            <a
              href="https://nexcent-omega-ten.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div id="project-bag" data-aos="zoom-in">
                <img src={nexcent} alt="nexcent" />
                <div id="project-name">
                  <p>Nexcent</p>
                </div>
              </div>
            </a>
            <a
              href="https://markdown-previewer-virid-mu.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div id="project-bag" data-aos="zoom-in">
                <img src={markdownPreviewer} alt="markdown-page" />
                <div id="project-name">
                  <p>Markdown Previewer</p>
                </div>
              </div>
            </a>
            <a
              href="https://dubemobi.github.io/landing-page/"
              target="_blank"
              rel="noreferrer"
            >
              <div id="project-bag" data-aos="zoom-in">
                <img src={landingPage} alt="landing-page" />
                <div id="project-name">
                  <p>Landing Page</p>
                </div>
              </div>
            </a>
          </div>
          <a
            href="https://github.com/DubemObi?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <button id="see-all">
              See all <FontAwesomeIcon icon={faArrowRight} id="see-all-arrow" />
            </button>
          </a>
        </section>
        <section id="contact">
          <h1 id="contact-text">Contact me</h1>
          <div id="contact-div">
            <div>
              <div className="div-border email">
                <p>
                  <FontAwesomeIcon icon={faEnvelope} id="icon" />
                  {"  "}
                  dubemobiwon@gmail.com
                </p>
              </div>
              <div className="div-border number">
                <p>
                  <FontAwesomeIcon icon={faPhone} id="icon" /> +2348140228588
                </p>
              </div>
              <div id="contact-links">
                <a
                  href="https://github.com/DubemObi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chidubem-obinwanne-0a113819a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://twitter.com/dubem_ob"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={faPaperPlane} id="contact-img" />
                {/* <img src={paperPlane} alt=""  /> */}
              </div>
            </div>
          </div>
        </section>
        <footer>
          <p>&copy; Copyright Dubem</p>
        </footer>
      </div>
    );
  }
}
export default Home;
