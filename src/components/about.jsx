import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Graduate student from the University of Cincinnati with Computer SCience as a major.I love exploring new technologies.I am a Proficient full stack developer with Object Oriented Programming Java skills and Web development skills in ReactJS and  also backend in spring boot and NodeJS.
                     Also Skilled in using various AWS components which include AWS lambads for serverless architectures. 
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-3 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites using JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-3 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Spring boot,Spring Cloud,Spring data JPA</h3>
                    <p>Good exposure in building micro services in Spring boot as well good java Programming Skills</p>
                </div>
                </div>
            </div>
            <div className="col-md-3 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>I am having good on on job industry expertise in various devops tools like AWS,Docker,Kubernetes,
                        Writing jenkins jobs,mainting the CICD pipeline using groovy scripting</p>
                </div>
                </div>
            </div>
            <div className="col-md-3 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>AWS components</h3>
                    <p>I have worked on using various AWS components to build faoul tolerent applications.The componets i am aware o include
                        AWS lambads,AWS S3,AWS EC2,AWS CloudFormations and AWS DYnamoDB and also various Elastic load balancers
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-3 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Type script</h3>
                    <p>
                        Experienced with building Light weight serverless application in typescript.
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-3 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
