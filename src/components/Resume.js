import React, { Component } from "react";
import FacePic from "../images/headshot.jpg";
import pdfLogo from "../images/pdfLogo.jpg";
import heroComputerd from "../images/heroComputerd.jpg";
import linkedinLogo from "../images/linkedinLogo.jpg";
import cuteGithubLogo from "../images/cuteGithubLogo.png";
import pdxCodeLogo from "../images/pdxCodeLogo.png";
import uwLogo from "../images/uwLogo.png";
import sdceLogo from "../images/sdceLogo.png";
import mfaLogo from "../images/mfaLogo.png";
import harvardExtensionLogo from "../images/harvardExtensionLogo.png";

export default class Resume extends Component {
  render() {
    return (
      <>
        
          <div className="resumeWrapper">
            <h1 className="resumeTitle">Scott Patrcick Dancer</h1>
            
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
              </p><br></br>
              <div className="summaryTextTwo">
              <p> <b>Languages:</b>   HTML5, CSS3, JavaScript/ECMAScript 6, SQL  </p>
              <p> <b> Applications:</b> Github, Heroku, mySQL, Postman, Netlify  </p>
              <p> <b>Tools:</b> Bootstrap, Materialize, jQuery, Node.js, Express, Handlebars.js, ReactJS, MongoDB  </p>
              <p> <b>Adobe:</b> Photoshop, Illustrator, Animate, InDesign, After Effects, Audition, Dreamweaver, XD  </p>
              </div>
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





          {/* <!-- ********************  PROJECTS / PORTFOLIO  ********************* --> */}
          
        <div className="projectWrap">
        <h2>Featured Projects</h2>
        <p>
          The Project Section is currently under a rebuild and will be up and running shortly!
        </p>
        </div>

     

        

        
   









          {/* <!-- ***********************  WORK EXPERIENCE  *********************** --> */}

         

<section className="workExperience">
  <div className="contentWrap">
    <h2>Work Experience</h2>
    <p>Twenty five years of fine dining, bartending and managing restaurants in Boston, San Diego, Big Bear Lake, Cape Cod, Tucson, Cannon Beach, and Vancouver.  Won several Hospitality Awards which led to the promotion as a corporate regional trainer of 32 restaurants along the East Coast in 2014. </p>

  
    <section className="jobItem">
      <div className="jobDetails">
        <h3>Art and Development Consultant</h3>
        <p>Scott Patrick Dancer - Cannon Beach, Oregon</p>
        <p>MARCH 2019 – PRESENT</p>
      </div>
      <div className="jobSummary">
      <p className="keyContributions">Key Contributions:</p>
        <ul>
          <li>Created illustrations for marketing campaigns for a local business to help increase take-out sales</li>
          <li>Developing a web application to help an appraisal firm offer a modern online presence</li>
        </ul>
      </div>
    </section>

  <section className="jobItem">
    <div className="jobDetails">
      <h3>Server</h3>
      <p>Pelican Brewery - Cannon Beach, Oregon</p>
      <p>JUNE 2020 – NOVEMBER 2020</p>
    </div>
    <div className="jobSummary">
    <p className="keyContributions">Key Contributions:</p>
      <ul>
        <li>Implemented safety measures to protect employees and guests during the pandemic</li>
        <li>Participated in discussions which led to corporate-wide diversity policies</li>
      </ul>
    </div>
  </section>

  <section className="jobItem">
    <div className="jobDetails">
      <h3>Server</h3>
        <p>Amaro’s Table - Vancouver, Washington</p>
        <p>APRIL 2019 – MARCH 2020</p>
    </div>
    <div className="jobSummary">
        <p className="keyContributions">Key Contributions:</p>
        <ul>
          <li>Created systems that improved outdoor dining service</li>
          <li>Streamlined outdated feature presentation to a modern and efficient variations</li>
        </ul>
        </div>
  </section>
  
  <section className="jobItem lastEntry">
    <div className="jobDetails">
      <h3>Food and Beverage Director/Consultant</h3>
      <p>Best Western Premier - Vancouver, Washington</p>
      <p>JANUARY 2019 – APRIL 2019</p>
      </div>
      <div className="jobSummary">
    <p className="keyContributions">Key Contributions:</p>
      <ul>
        <li>Developed a complete restaurant from concept to operational, including developing metrics to measure guest experience, food cost, and restaurant profitability</li>
        <li>Interviewed, hired, and counseled qualified industry professionals </li>
        <li>Provided training empowering staff to resolved problems efficiently ensuring both guest satisfaction and quality assurance </li>
      </ul>
      </div>
  </section>
  </div>
</section>


















 {/* <!-- ***********************   EDUCATION  *********************** --> */}
            
            
        
              <section className="educationDetails">




                <h2>Education</h2>
                <section className="educationLogos uwContent">
                  <img
                    src={uwLogo}
                    className="schoolLogo"
                    alt="purple and white logo for the university of washington"
                  ></img>
                  <h3>University of Washington - Seattle, WA</h3>
                  <p>Certificate in Web Development, 2020</p>
                  <p>
                    A 12-week intensive program focused on gaining technical
                    programming skills in HTML5, CSS3, JavaScript, JQuery,
                    Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express,
                    Handelbars.js & ReactJS
                  </p>
                </section>

                <section className="educationLogos sanContent">
                  <img
                    src={sdceLogo}
                    className="schoolLogo"
                    alt="teal,black, and white logo for code for san diego continueing education"
                  ></img>
                  <h3>San Diego Continuing Education - San Diego, CA</h3>
                  <p>Certificate in Digital Design, 2017</p>
                  <p>
                    A 12-month multimedia course with focus on the Adobe
                    Creative Cloud Suite.
                  </p>
                </section>

                <section className="educationLogos mfaContent">
                  <img
                    src={mfaLogo}
                    className="schoolLogo"
                    alt="black and white graphic logo for museum of fine arts in Boston, MA"
                  ></img>
                  <h3> Museum of Fine Arts - Boston, MA</h3>
                  <p>Coursework in Art, 2012</p>
                  <p>
                    Studied Color Theory, Figure Drawing, Sculpture, and
                    Conceptual Design.
                  </p>
                </section>
         
                <section className="educationLogos lastEntry harvardExContent">
                  <img
                    src={harvardExtensionLogo}
                    className="schoolLogo"
                    alt="red, blue, white, and gold logo for code for harvard extension school Cambridge, MA"
                  ></img>
                  <h3>Harvard Extension School - Cambridge, MA</h3>
                  <p>Coursework in Music, 2010</p>
                  <p>Explored Writing, Music Theory and Composition.</p>
                </section>
              </section>
            

            {/* </div> */}
          {/* // </section> */}






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
