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
import { Card, Button, Row, Col, Accordion } from 'react-bootstrap';
import{useState} from 'react';

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
        <div className="accordion" id="accordionExample">
          <div>
            <div className="card-header" id="headingOne">
                <h2 data-toggle="collapse" data-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                  Question #1
                </h2>
            </div>

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                 data-parent="#accordionExample">
              <div className="answer">
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="card-header" id="headingTwo">
              <h2 data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="true" aria-controls="collapseOne">
                Question #2
              </h2>
            </div>

            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                 data-parent="#accordionExample">
              <div className="answer">
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                  moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                  proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="card-header" id="headingThree">
              <h2 data-toggle="collapse" data-target="#collapseThree"
                  aria-expanded="true" aria-controls="collapseOne">
                Question #3
              </h2>
            </div>

            <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                 data-parent="#accordionExample">
              <div className="answer">
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                  moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                  proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
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
