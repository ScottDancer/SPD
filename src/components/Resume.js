import React, { Component } from "react";
import FacePic from "../images/headshot.jpg";
import pdfLogo from "../images/pdfLogo.jpg";
import heroComputerd from "../images/heroComputerd.jpg";
import linkedinLogo from "../images/linkedinLogo.jpg";
import cuteGithubLogo from "../images/cuteGithubLogo.png";
import pdxCodeLogo from "../images/pdxCodeLogo.png";
import coloredPencils from "../images/coloredPencils.jpg";
import uwLogo from "../images/uwLogo.png";
import sdceLogo from "../images/sdceLogo.png";
import mfaLogo from "../images/mfaLogo.png";
import harvardExtensionLogo from "../images/harvardExtensionLogo.png";

export default class Resume extends Component {
  render() {
    return (
      <>
        
          <div className="resumeWrapper">
            <h1 className="resumeTitle"> Scott Patrcick Dancer</h1>
            
            <p className="resumeSubtitle">
              <q>The dreamers are the saviors of the wolrd.</q>
              <cite>- James Allen</cite>
            </p>

            <img
              src={heroComputerd}
              className="hero"
              alt="rainbow laptop"
            ></img>

          </div>


          <section className="summary">
            <h2 className="heading headingSummary">
              Graphic & Web Designer/Developer
            </h2>
            <img src={FacePic} className="profilePic" alt="headshot"></img>

            <div className="summaryText">
              <p>
                Full Stack Web Developer and Graphic Designer with a background
                in illustration and cartooning. Possess a strong foundation in
                communication, problem solving, and creativity that lends itself
                to building applications that are aesthetically pleasing and
                meet client expectations. Earned a Certificate in Web
                Development from the University of Washington.
              </p>
            </div>

            <div className="contactInfo">
              <p>Vancouver, WA</p>
              <p>(360) 953-7969</p>
              <ul>
                <li>
                  <a href="mailto:scottpdancer@gmail.com">
                    scottpdancer@gmail.com
                  </a>
                </li>
              </ul>
              {/* <p>GitHub: https://github.com/ScottDancer</p> */}
              {/* <p> Portfolio: https://scottpatrickdancer.com</p> */}
              {/* <p>
                      {" "}
                      LinkedIn:
                      https://www.linkedin.com/in/scott-dancer-9744091b2/
                    </p> */}
            </div>

            <img
              src={pdfLogo}
              className="pdfLogo"
              alt="shiny red pdf logo"
            ></img>
          </section>






          <section className="education">
       

            <div className="educationContent">
              <section className="educationDetails educationBackground">
                <h2>Education</h2>
                <section className="educationLogos uw">
                  <img
                    src={uwLogo}
                    className="uwLogo"
                    alt="purple and white logo for the university of washington"
                  ></img>
                  <h3>University of Washington - Seattle, WA</h3>
                  <p>Certificate in Web Development, 2020</p>
                  <p>
                    A 12-week intensive program focused on gaining technical
                    programming skills in HTML5, CSS3, JavaScript, JQuery,
                    Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express,
                    Handelbars.js & ReactJS.{" "}
                  </p>
                </section>

                <section className="educationLogos sanDiego">
                  <img
                    src={sdceLogo}
                    className="sdceLogo"
                    alt="teal,black, and white logo for code for san diego continueing education"
                  ></img>
                  <h3>San Diego Continuing Education - San Diego, CA</h3>
                  <p>Certificate in Digital Design, 2017</p>
                  <p>
                    A 12-month multimedia course with focus on the Adobe
                    Creative Cloud Suite.
                  </p>
                </section>

                <section className="educationLogos mfa">
                  <img
                    src={mfaLogo}
                    className="mfaLogo"
                    alt="black and white graphic logo for museum of fine arts in Boston, MA"
                  ></img>
                  <h3> Museum of Fine Arts - Boston, MA</h3>
                  <p>Coursework in Art, 2012</p>
                  <p>
                    Studied Color Theory, Figure Drawing, Sculpture, and
                    Conceptual Design.
                  </p>
                </section>
         
                <section className="educationLogos lastEntry harvardEx">
                  <img
                    src={harvardExtensionLogo}
                    className="harvardExtensionLogo"
                    alt="red, blue, white, and gold logo for code for harvard extension school Cambridge, MA"
                  ></img>
                  <h3>Harvard Extension School - Cambridge, MA</h3>
                  <p>Coursework in Music, 2010</p>
                  <p>Explored Writing, Music Theory and Composition.</p>
                </section>
              </section>
              <img
              src={coloredPencils}
              className="educationBackground"
              alt="a row of colored pencils"
            ></img>

            </div>
          </section>






          <div className="volunteer">
            <h2>Volunteer Work</h2>

            <img
              src={pdxCodeLogo}
              className="pdxCodeLogo"
              alt="teal and white rose logo for code for pdx"
            ></img>
            <h3 className="volunteerText">Code for PDX - Portland, OR</h3>
            <p className="volunteerTextA">Web Designer and Developer</p>
            <p className="volunteerTextB">2021</p>
          </div>







          <footer className="footer">
            <div className="footerContent">
              <h2>Create with me!</h2>

              <ul className="footerContactList">
                <li className="footerContactLinks">
                  <a href="https://www.linkedin.com/in/scott-dancer-9744091b2/">
                    {" "}
                    <img
                      src={linkedinLogo}
                      className="imgLinkedinLogo"
                      alt="3d looking circular linkedin logo"
                    ></img>
                    LinkedIn
                  </a>
                </li>

                <li className="footerContactLinks">
                  <a href=" https://github.com/ScottDancer">
                    <img
                      src={cuteGithubLogo}
                      className="imgGithubLogo"
                      alt="cute cartoon github logo"
                    ></img>
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </footer>
   
      </>
    );
  }
}
