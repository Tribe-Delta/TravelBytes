import React from "react";
import '../css/About.css';
import brian from '../img/brian.png';
import dan from '../img/dan.png';
import stephen from '../img/stephen.png';
import timothee from '../img/timothee.jpg';

// format from https://codepen.io/susegroj/pen/gwbypN

class About extends React.Component
{
render(){
  return (
    <div className="container">
    <div className="main">
        <div className="front green">
        <img className="smile" src={dan} alt="Dan's charming face" height="45%"></img>
            <div className="">Dan Awesome</div>
            <div className="data-wrapper">
                <div className="circle"><i className="fa fa-code"></i></div>
                <div className="data">
                    <span className="title">Full-Stack Developer</span>
                    <p>Hobbies:</p>
                </div>
            </div>
        </div>
        <div className="back green">
            <div className="skills">
                <h2>Dev Skills</h2>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">C#</span>
                </div>
               <div className="skill-ele">
                   <div className="stars">
                       <i className="fa fa-star" aria-hidden="true"></i>
                       <i className="fa fa-star" aria-hidden="true"></i>
                       <i className="fa fa-star" aria-hidden="true"></i>
                       <i className="fa fa-star" aria-hidden="true"></i>
                   </div>
                    <span className="tech">JavaScript</span>
                </div>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">Unity</span>
                </div>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">React</span>
                </div>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">New Skill</span>
                </div>
            </div>
            <div className="social">
            <a href="https://github.com/Dawesome101" >
                <i className="fa fa-2x fa-github" ></i>
              </a> 
              <a href="https://www.linkedin.com/in/daniel-awesome/" >
                <i className="fa fa-2x fa-linkedin-square"></i>
              </a> 
            </div>
        </div>
    </div>
    <div className="main">
        <div className="front green">
        <img className="smile" src={stephen} alt="a better man i have yet to meet" height="45%"></img>
            <div className="">Stephen Clemmer</div>
            <div className="data-wrapper">
                <div className="circle"><i className="fa fa-code"></i></div>
                <div className="data">
                    <span className="title">Full-Stack Developer</span>
                    <p>Hobbies: </p>
                </div>
            </div>
        </div>
        <div className="back green">
            <div className="skills">
                <h2>Dev Skills</h2>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">Java Core</span>
                </div>
               <div className="skill-ele">
                   <div className="stars">
                       <i className="fa fa-star" aria-hidden="true"></i>
                       <i className="fa fa-star" aria-hidden="true"></i>
                       <i className="fa fa-star" aria-hidden="true"></i>
                       <i className="fa fa-star" aria-hidden="true"></i>
                       <i className="fa fa-star" aria-hidden="true"></i>
                   </div>
                    <span className="tech">CSS3</span>
                </div>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">JavaScript</span>
                </div>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">Django</span>
                </div>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">New Skill</span>
                </div>
            </div>
            <div className="social">
            <a href="https://github.com/stephenclemmer" >
                <i className="fa fa-2x fa-github" ></i>
              </a> 
              <a href="https://www.linkedin.com/in/stephen-clemmer/" >
                <i className="fa fa-2x fa-linkedin-square"></i>
              </a> 
            </div>
        </div>
    </div>
    <div className="main">
        <div className="front green">
        <img className="smile" src={timothee} alt="Timothee outdresses all of us easily" height="45%"></img>
            <div className="">Timothee Odushina</div>
            <div className="data-wrapper">
                <div className="circle"><i className="fa fa-code"></i></div>
                <div className="data">
                    <span className="title">Full-Stack Developer</span>
                    <p>Hobbies: </p>
                </div>
            </div>
        </div>
        <div className="back green">
            <div className="skills">
                <h2>Dev Skills</h2>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">React</span>
                </div>
               <div className="skill-ele">
                   <div className="stars">
                       <i className="fa fa-star" aria-hidden="true"></i>
                       <i className="fa fa-star" aria-hidden="true"></i>
                       <i className="fa fa-star" aria-hidden="true"></i>
                   </div>
                    <span className="tech">JavaScript</span>
                </div>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">Git</span>
                </div>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">GitHub</span>
                </div>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">VSCode</span>
                </div>
            </div>
            <div className="social">
            <a href="https://github.com/timothee2022" >
                <i className="fa fa-2x fa-github" ></i>
              </a> 
              <a href="https://www.linkedin.com/in/hsp20tim/" >
                <i className="fa fa-2x fa-linkedin-square"></i>
              </a> 
            </div>
        </div>
    </div>
    <div className="main">
        <div className="front">
        <img className="smile" src={brian} alt="just brian, that's about it" height="45%"></img>
            <div className="">Brian Sward</div>
            <div className="data-wrapper">
                <div className="circle"><i className="fa fa-code"></i></div>
                <div className="data">
                    <span className="title">Data Analyst</span>
                    <p>Hobbies: Cooking, Tabletop Games, Math Enthusist </p>
                </div>
            </div>
        </div>
        <div className="back">
            <div className="skills">
                <h2>Dev Skills</h2>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i classNameName="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">Excel/Google Sheets</span>
                </div>
               <div className="skill-ele">
                   <div className="stars">
                       <i className="fa fa-star" aria-hidden="true"></i>
                       <i className="fa fa-star" aria-hidden="true"></i>
                       <i className="fa fa-star" aria-hidden="true"></i>
                   </div>
                    <span className="tech">HTML5</span>
                </div>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">JavaScript</span>
                </div>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">ReactJS</span>
                </div>
                <div className="skill-ele">
                    <div className="stars">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span className="tech">Python</span>
                </div>
            </div>
            <div className="social" >
              <a href="https://github.com/BrianSward" >
                <i className="fa fa-2x fa-github" ></i>
              </a> 
              <a href="https://www.linkedin.com/in/brian-sward/" >
                <i className="fa fa-2x fa-linkedin-square"></i>
              </a> 
            </div>
        </div>
    </div>
</div>
  )
}
  
}

export default About;