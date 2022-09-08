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
    <div class="container">
    <div class="main">
        <div class="front green">
        <img class="smile" src={dan} alt="Dan's charming face" height="45%"></img>
            <div class="">Dan Awesome</div>
            <div class="data-wrapper">
                <div class="circle"><i class="fa fa-code"></i></div>
                <div class="data">
                    <span class="title">Full-Stack Developer</span>
                    <p>Hobbies:</p>
                </div>
            </div>
        </div>
        <div class="back green">
            <div class="skills">
                <h2>Dev Skills</h2>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">C#</span>
                </div>
               <div class="skill-ele">
                   <div class="stars">
                       <i class="fa fa-star" aria-hidden="true"></i>
                       <i class="fa fa-star" aria-hidden="true"></i>
                       <i class="fa fa-star" aria-hidden="true"></i>
                       <i class="fa fa-star" aria-hidden="true"></i>
                   </div>
                    <span class="tech">JavaScript</span>
                </div>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">Unity</span>
                </div>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">React</span>
                </div>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">New Skill</span>
                </div>
            </div>
            <div class="social">
            <a href="https://github.com/Dawesome101" >
                <i class="fa fa-2x fa-github" ></i>
              </a> 
              <a href="https://www.linkedin.com/in/daniel-awesome/" >
                <i class="fa fa-2x fa-linkedin-square"></i>
              </a> 
            </div>
        </div>
    </div>
    <div class="main">
        <div class="front green">
        <img class="smile" src={stephen} alt="a better man i have yet to meet" height="45%"></img>
            <div class="">Stephen Clemmer</div>
            <div class="data-wrapper">
                <div class="circle"><i class="fa fa-code"></i></div>
                <div class="data">
                    <span class="title">Full-Stack Developer</span>
                    <p>Hobbies: </p>
                </div>
            </div>
        </div>
        <div class="back green">
            <div class="skills">
                <h2>Dev Skills</h2>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">Java Core</span>
                </div>
               <div class="skill-ele">
                   <div class="stars">
                       <i class="fa fa-star" aria-hidden="true"></i>
                       <i class="fa fa-star" aria-hidden="true"></i>
                       <i class="fa fa-star" aria-hidden="true"></i>
                       <i class="fa fa-star" aria-hidden="true"></i>
                       <i class="fa fa-star" aria-hidden="true"></i>
                   </div>
                    <span class="tech">CSS3</span>
                </div>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">JavaScript</span>
                </div>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">Django</span>
                </div>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">New Skill</span>
                </div>
            </div>
            <div class="social">
            <a href="https://github.com/stephenclemmer" >
                <i class="fa fa-2x fa-github" ></i>
              </a> 
              <a href="https://www.linkedin.com/in/stephen-clemmer/" >
                <i class="fa fa-2x fa-linkedin-square"></i>
              </a> 
            </div>
        </div>
    </div>
    <div class="main">
        <div class="front green">
        <img class="smile" src={timothee} alt="Timothee outdresses all of us easily" height="45%"></img>
            <div class="">Timothee Odushina</div>
            <div class="data-wrapper">
                <div class="circle"><i class="fa fa-code"></i></div>
                <div class="data">
                    <span class="title">Full-Stack Developer</span>
                    <p>Hobbies: </p>
                </div>
            </div>
        </div>
        <div class="back green">
            <div class="skills">
                <h2>Dev Skills</h2>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">React</span>
                </div>
               <div class="skill-ele">
                   <div class="stars">
                       <i class="fa fa-star" aria-hidden="true"></i>
                       <i class="fa fa-star" aria-hidden="true"></i>
                       <i class="fa fa-star" aria-hidden="true"></i>
                   </div>
                    <span class="tech">JavaScript</span>
                </div>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">Git</span>
                </div>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">GitHub</span>
                </div>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">VSCode</span>
                </div>
            </div>
            <div class="social">
            <a href="https://github.com/timothee2022" >
                <i class="fa fa-2x fa-github" ></i>
              </a> 
              <a href="https://www.linkedin.com/in/hsp20tim/" >
                <i class="fa fa-2x fa-linkedin-square"></i>
              </a> 
            </div>
        </div>
    </div>
    <div class="main">
        <div class="front">
        <img class="smile" src={brian} alt="just brian, that's about it" height="45%"></img>
            <div class="">Brian Sward</div>
            <div class="data-wrapper">
                <div class="circle"><i class="fa fa-code"></i></div>
                <div class="data">
                    <span class="title">Data Analyst</span>
                    <p>Hobbies: Cooking, Tabletop Games, Math Enthusist </p>
                </div>
            </div>
        </div>
        <div class="back">
            <div class="skills">
                <h2>Dev Skills</h2>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">Excel/Google Sheets</span>
                </div>
               <div class="skill-ele">
                   <div class="stars">
                       <i class="fa fa-star" aria-hidden="true"></i>
                       <i class="fa fa-star" aria-hidden="true"></i>
                       <i class="fa fa-star" aria-hidden="true"></i>
                   </div>
                    <span class="tech">HTML5</span>
                </div>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">JavaScript</span>
                </div>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">ReactJS</span>
                </div>
                <div class="skill-ele">
                    <div class="stars">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <span class="tech">Python</span>
                </div>
            </div>
            <div class="social" >
              <a href="https://github.com/BrianSward" >
                <i class="fa fa-2x fa-github" ></i>
              </a> 
              <a href="https://www.linkedin.com/in/brian-sward/" >
                <i class="fa fa-2x fa-linkedin-square"></i>
              </a> 
            </div>
        </div>
    </div>
</div>
  )
}
  
}

export default About;