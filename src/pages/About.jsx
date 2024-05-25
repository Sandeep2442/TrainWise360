import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutPageContainer>
    <div className="about-page">
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About Us</h2>
            <p>Get to know us better</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src="/assets/img/clients/ab.png.png" className="img-fluid" alt="About Us" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>Who We Are</h3>
              <p>
                We are passionate about fitness and believe in helping people lead healthier lives through our fitness tracking platform.
              </p>
              <p>
                Our mission is to empower individuals to achieve their fitness goals by providing them with the tools and resources they need to succeed.
              </p>
              <p>
              Our goal is to make people happy and fit, to offer them the simplest way to track workouts and to communicate with personal trainer.
              </p>
              <ul>
                <li><i className="bx bx-check"></i> Track your workouts and progress</li>
                <li><i className="bx bx-check"></i> Set and achieve fitness goals</li>
                <li><i className="bx bx-check"></i> Connect with others in the fitness community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
    </div>
    </AboutPageContainer>
  );
};

const AboutPageContainer = styled.div`
  padding: 30px 0;
  margin: 20px;
  overflow-y:scroll;
`;

const AboutSection = styled.section`
  background: #f8f9fa;
  padding: 80px 0;
`;

const SectionTitle = styled.div`
  h2 {
    font-size: 36px;
    font-weight: 700;
    color: #343a40;
  }

  p {
    margin-bottom: 30px;
    font-size: 16px;
    color: #6c757d;
  }
`;

const Content = styled.div`
  h3 {
    font-size: 30px;
    font-weight: 700;
    color: #343a40;
  }

  p {
    font-size: 16px;
    color: #6c757d;
    padding: absolute;
    margin-left:20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    padding-left: 20px;
    position: relative;
    margin-bottom: 10px;
  }

  ul li i {
    font-size: 24px;
    color: #3fcdc7;
    position: absolute;
    left: 0;
    top: -1px;
  }
`;
export default About;
