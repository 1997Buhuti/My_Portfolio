import React from 'react';
import { About } from '../styles';
import styled from 'styled-components';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
//Scroll animation
import { reveal } from '../animation';
import { useScroll } from './useScroll';
//import '../styles/imageCards.css'
//import '../styles/expereinceCards.css'
import { Card, Button, Row, Col } from 'react-bootstrap';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      transition={{ duration: 0.5 }}
      ref={element}
      animate={controls}
      initial='hidden'
      variants={reveal}
    >
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='Who Am I?'>
          <div className='answer'>
            <p>An undergraduate, Tech enthusiast & a passionate programmer.</p>
            <p>
              Experienced Team Leader with a demonstrated history of working in the non-profit
              organization management industry. Skilled in React , NodeJS , Java , MYSQL MongoDB Databases,
              Microsoft Word, Adobe Photoshop. Strong information technology professional with a
              Bachelor of Arts - BA honour's focused in Computer Studies from University of Kelaniya Sri Lanka.
            </p>
          </div>
        </Toggle>
        <Toggle title='What Products do you offer?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title='Diferrent Payment Methods'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              reprehenderit perferendis sunt magni dolores ratione.
            </p>
          </div>
        </Toggle>
        <Toggle title='Leadership Experience'>
          <Row>
            <Col xs={12} xl={4}>
              <Card className='imageCard' bg='dark' style={{ width: '18rem' }}>
                <Card.Img variant='top'
                          src='https://media-exp1.licdn.com/dms/image/C562DAQGjh7Z9n5_8tA/profile-treasury-image-shrink_1920_1920/0/1597419031450?e=1629486000&v=beta&t=zOSvwU2Tx9sw3fluODvEikeDOQSGl7Qc2p8q4efDVyQ' />
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
                          src='https://media-exp1.licdn.com/dms/image/C562DAQFNfW_W7kTjmA/profile-treasury-image-shrink_1920_1920/0/1597417719306?e=1629547200&v=beta&t=CqK2QIx1P5ICyYMo_53CMdnvr_L_23OjXwxgE8BfxLM' />
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
                          src='https://media-exp1.licdn.com/dms/image/C562DAQFcKksThgKL_Q/profile-treasury-image-shrink_1920_1920/0/1597418455624?e=1629550800&v=beta&t=aNxiKOXvMsygyR_Qn5ApiFR_rXq1Eds6SC6mYinqyag' />
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

        </Toggle>
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
