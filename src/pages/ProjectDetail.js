import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { projectState } from '../projectState';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects, setProjects] = useState(projectState);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter((projectState) => projectState.url === url);
    setProject(currentProject[0]);
  }, [projects, url]);

  return (
    <>
      {project && (
        <Details
          variants={pageAnimation}
          exit="exit"
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{project.title}</h2>
            <img src={project.mainImg} alt="" />
          </HeadLine>
          <Awards>
            {project.projectDetails.map((project) => (
              <Award
                key={project.title}
                title={project.title}
                description={project.description}
              />
            ))}
          </Awards>
          <URLInfo>
            <pre>
              URL : <a target="_blank" href={project.projectURL}>{project.projectURL}</a>
            </pre>
            <pre>
              GitHub Link : <a target="_blank" href={project.githubRepo}>{project.githubRepo}</a>
            </pre>
          </URLInfo>
          <ImageDisplay>
            <img src={project.secondaryImg} alt="" />
          </ImageDisplay>
        </Details>
      )}
      <ScrollTop />
    </>
  );
};

const Award = ({ title, description, projectURL, githubRepo }) => {
  return (
    <ProjectStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </ProjectStyle>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const URLInfo = styled.div`
  width: 100%;
  align-content: center;
  text-align: center;
  a{
    color: red;
    :hover{
      color: blue;
    }
    cursor: pointer;
  }
  pre{
    color: red;
  }
`;
const HeadLine = styled.div`
  min-height: 90vh;
  //max-width: 30vw;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const ProjectStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
 
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default ProjectDetail;
