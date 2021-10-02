import React from 'react';
import { About } from '../styles';
import styled from 'styled-components';
import { AnimateSharedLayout } from 'framer-motion';
//Scroll animation
import { reveal } from '../animation';
import { useScroll } from './useScroll';
import { Card, Button, Row, Col, Accordion } from 'react-bootstrap';
import led from '../img/led.jpg'
import Itech from '../img/Itech.jpg'
import aiesec from '../img/aiesec.jpg'

const FaqSection = () => {
  const [element, controls] = useScroll();
  const isMobile = window.innerWidth > 768;
  return (
    <Faq
      transition={{ duration: 0.5 }}
      ref={element}
      animate={controls}
      initial='hidden'
      variants={isMobile && reveal}
    >
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>

      <AnimateSharedLayout>
        <div className="accordion" id="accordionExample">
          <div>
            <div className="card-header" id="headingOne">
                <h4 data-toggle="collapse" data-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                  Who Am I
                </h4>
              <div className="faq-line"></div>
            </div>

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                 data-parent="#accordionExample">
              <div className="answer">
                <p>
                  Experienced Team Leader with a demonstrated history of working in the non-profit
                  organization management industry. A programmer Skilled in React , NodeJS , Graphql  Java , MYSQL MongoDB Databases,
                  Microsoft Word, Adobe Photoshop. Strong information technology professional with a
                  Bachelor of Arts - BA honour's focused in Computer Studies from University of Kelaniya Sri Lanka.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="card-header" id="headingTwo">
              <h4 data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="true" aria-controls="collapseOne">
                What Products do I offer?
              </h4>
              <div className="faq-line"></div>
            </div>

            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                 data-parent="#accordionExample">
              <div className="answer">
                <p>Now you can build your dream web application with the latest MERN stack. We assure you to provide
                high quality, efficient service 24/7
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="card-header" id="headingThree">
              <h4 data-toggle="collapse" data-target="#collapseThree"
                  aria-expanded="true" aria-controls="collapseOne">
                Leadership Experience
              </h4>
              <div className="faq-line"></div>
            </div>

            <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                 data-parent="#accordionExample">
              <div className="answer">
                <Row>
                  <Col xs={12} xl={4}>
                    <Card className='imageCard' bg='dark' style={{ width: '18rem' }}>
                      <Card.Img variant='top'
                                src={led} />
                      <Card.Body>
                        <Card.Text>
                          Organizing Committee member for LED Youth Forum 2019 (Branding & Marketing ambassador)
                        </Card.Text>
                        <Button variant='primary'>see more..</Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} xl={4}>
                    <Card className='imageCard' bg='dark' style={{ width: '18rem' }}>
                      <Card.Img variant='top'
                                src={Itech}/>
                      <Card.Body>
                        <Card.Text>
                          Organizing Committee President for project 'I tech'
                          A volunteering project organized by aiesec in colombo north.
                        </Card.Text>
                        <Button variant='primary'>see more..</Button>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col xs={12} xl={4}>
                    <Card className='imageCard' bg='dark' style={{ width: '18rem' }}>
                      <Card.Img variant='top'
                                src= {aiesec}/>
                      <Card.Body>
                        <Card.Text>
                          Organizing Committee Vice President in Marketing & Digital Experience (Leadership Development
                          Seminar 2019)
                        </Card.Text>
                        <Button variant='primary'>see more..</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  max-height: max-content;

  span {
    display: block;
    color: #23d997;
  }
  
  h4{
    cursor: pointer;
    padding: 2rem 0rem;
  }
  
  h2 {
    font-weight: lighter;
    padding-bottom: 4rem;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }

  Card.Body {
    background-color: black;
    color: beige;
    margin-top: 0;
    border: 1px solid red;
  }
`;

export default FaqSection;
