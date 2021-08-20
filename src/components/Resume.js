import React, { Component } from "react";
import FacePic from "../images/headshot.jpg";
import pdfLogo from "../images/pdfLogo.jpg";
import heroComputer from "../images/heroComputer.jpg";


// import Hero from "../images/hero-comp.jpg"

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
                    src={heroComputer}
                    className="hero"
                    alt="rainbow laptop"
                  ></img>
            </div>


          
              <section className="summary">
              <h2 className="heading .headingSummary">Graphic & Web Designer/Developer</h2>
                  <img
                    src={FacePic}
                    className="profilePic"
                    alt="headshot"
                  ></img>
                  
                  <div className="summaryText">
                    <p >
                      Full Stack Web Developer and Graphic Designer with a
                      background in illustration and cartooning. Possess a strong
                      foundation in communication, problem solving, and creativity
                      that lends itself to building applications that are
                      aesthetically pleasing and meet client expectations. Earned
                      a Certificate in Web Development from the University of
                      Washington.
                    </p>
                  </div>

                  <div className="contactInfo">
                    <p>Vancouver, WA | (360) 953-7969</p>
                    <p>Email: scottpdancer@gmail.com</p>
                    <p>GitHub: https://github.com/ScottDancer</p>
                    <p> Portfolio: https://scottpatrickdancer.com</p>
                    <p>
                      {" "}
                      LinkedIn:
                      https://www.linkedin.com/in/scott-dancer-9744091b2/
                    </p>
                  </div>

                  <img
                    src={pdfLogo}
                    className="pdfLogo"
                    alt="shiny red pdf logo"
                  ></img>

               
              </section>
         
        
        </body>
      </>
    );
  }
}
