import React from 'react';
import styled from 'styled-components';
//Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import { Facebook,Linkedin,EnvelopeFill,CircleFill ,FileEarmarkPdfFill, TelephoneForwardFill} from 'react-bootstrap-icons';
import { Col, Row } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <ContactStyle
      style={{ background: '#fff' }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
        <div className="line2"/>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Row>
                <h4><CircleFill/> Contact Me</h4>
            </Row>
            <Row styele={{border:"2px solid green "}}>
              <Col className="ml-5">
                  <h5><Linkedin/>: <a href={'https://www.linkedin.com/in/dpbmanakal'} target="_blank">Buhuti Manakal</a> </h5>
                  <h5><Facebook/>: <a href={'https://www.linkedin.com/in/dpbmanakal'} target="_blank">Buhuti Manakal</a> </h5>
                <h5><TelephoneForwardFill/>:+94767456700</h5>
              </Col>
            </Row>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Row>
              <h4><CircleFill/> Drop an email. </h4>
            </Row>
            <Row styele={{border:"2px solid green "}}>
              <Col className="ml-5">
                <h6><EnvelopeFill/>: <a href="mailto:dp.manakal82@gmail.com@domain.com" onClick="window.location.href='np.html'">dp.manakal82@gmail.com</a></h6>
              </Col>
            </Row>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Row>
              <h4><CircleFill/>View My CV. </h4>
            </Row>
            <Row styele={{border:"2px solid green "}}>
              <Col className="ml-5">
                <h6><FileEarmarkPdfFill/>: <a href="https://tinyurl.com/465mwjm9" target="_blank">Manakal's CV</a></h6>
              </Col>
            </Row>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const Hide = styled.div`
  //overflow: hidden;
`;

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;


const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Social = styled(motion.div)`
  margin-top: 1em;
  @media (max-width: 1500px) {
    h2 {
      margin: 1rem 0;
      font-size: 2.5rem;
    }
  }
`;

export default ContactUs;
