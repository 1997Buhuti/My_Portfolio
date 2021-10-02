import React from 'react';
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
//import homeImg2 from '../img/home2.png';
import mohammad from '../img/mohammad.jpg';
//Scroll animation
import { reveal } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  const isMobile = window.innerWidth > 768;
  return (
    <Services
      transition={{ duration: 0.75 }}
      ref={element}
      variants={reveal}
      animate={isMobile && controls}
      initial="hidden"
    >
      <Description>
        <h2>
          High <span>quality</span> services.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>
              Efficiency is doing things right; effectiveness is doing the right things.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Talent wins games, but teamwork and intelligence win championships.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Pro Grade Stack</h3>
            </div>
            <p>Use most popular MERN stack to build your dream project.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>High quality yet affordable.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={mohammad} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  min-height: 90vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1500px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
      border-radius: .2rem;
    }
  }
  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default ServicesSection;
