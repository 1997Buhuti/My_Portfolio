import React from 'react';
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
//Images
import myImage from '../img/myImage.jpg';
import { titleAnim, fade, photoAnim } from '../animation';
import { motion } from 'framer-motion';
import Wave from './Wave';

const AboutSection = () => {
  const isMobile = true;
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={isMobile && titleAnim}>Make your</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={isMobile && titleAnim}>
              <span>dream project </span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={isMobile && titleAnim}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={isMobile && fade}>
          Hi I'm Manakal a fullstack web developer,
          Tech enthusiast.
          Contact Me to build your dream web project.
        </motion.p>
        <motion.button variants={isMobile && fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img variants={isMobile && photoAnim} src={myImage} alt="camera guy" />
      </Image>
      <Wave />
    </About>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
