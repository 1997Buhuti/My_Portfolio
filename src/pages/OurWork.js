import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//Images
import smartwear from '../img/smartwear.JPG';
import ecom1 from '../img/ecommerce1.JPG';
import Library1 from '../img/Library1.JPG';
import Acis1 from '../img/ACIS1.png';
import BSB1 from '../img/BSB1.png';

//Animation
import { motion } from 'framer-motion';
import { useScroll } from '../components/useScroll';
import {
  pageAnimation,
  fade,
  lineAnim,
  photoAnim,
  sliderContainer,
  movieContainer,
  slider,
} from '../animation';
import ScrollTop from '../components/ScrollTop';

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: '#fff' }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      <Movie variants={movieContainer}>
        <motion.h2 variants={fade}>ACIS By AIMS</motion.h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/acis">
          <Hide>
            <motion.img variants={photoAnim} src={Acis1} alt="EcomApp" />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={movieContainer}>
        <motion.h2 variants={fade}>Bodyshop Booster (BSB) V.2</motion.h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/BSB">
          <Hide>
            <motion.img variants={photoAnim} src={BSB1} alt="EcomApp" />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={movieContainer}>
        <motion.h2 variants={fade}>
          Ecommerce Application (Still at Development)
        </motion.h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/e-commerce">
          <Hide>
            <motion.img variants={photoAnim} src={ecom1} alt="EcomApp" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element}
        variants={movieContainer}
        animate={controls}
        initial="hidden"
      >
        <h2>Java Desktop App (Smartwear T-Shirts)</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/SmartWear">
          <img src={smartwear} alt="the-race" />
        </Link>
      </Movie>
      <Movie
        transition={{ duration: 0.5 }}
        ref={element2}
        variants={movieContainer}
        animate={controls2}
        initial="hidden"
      >
        <h2>Library Application</h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/Library">
          <img src={Library1} alt="good-times" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background-color: black;
  h2 {
    padding: 1rem;
  }
  @media (max-width: 1500px) {
    padding: 2rem 2rem;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: x-large;
    }
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
