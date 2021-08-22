import React, { Component } from "react";
import FacePic from "../images/headshot.jpg";
import pdfLogo from "../images/pdfLogo.jpg";
import heroComputerd from "../images/heroComputerd.jpg";
import linkedinLogo from "../images/linkedinLogo.jpg";
import cuteGithubLogo from "../images/cuteGithubLogo.png";
import pdxCodeLogo from "../images/pdxCodeLogo.png";




export default class Resume extends Component {
  render() {
    return (
      <>
        <body className="site">
          <div className="resumeHero">
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

         
        <div class="volunteer">
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
            <div class="footerContent">
              <h2>Create with me!</h2>

              <ul class="footerContactList">
                <li class="footerContactLinks">
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

                <li class="footerContactLinks">
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


        </body>
      </>
    );
  }
}
