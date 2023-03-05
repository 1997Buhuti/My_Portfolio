//Import Images
import ecommerce1 from './img/ecommerce1.JPG';
import ecommerce2 from './img/ecommerce2.JPG';
import smartwear from './img/smartwear.JPG';
import smartwear2 from './img/smartwear2.JPG';
import Library1 from './img/Library1.JPG';
import Library2 from './img/Library2.JPG';
import Acis1 from './img/ACIS1.png';
import Acis2 from './img/ACIS2.png';
import BSB1 from './img/BSB1.png';
import BSB2 from './img/BSB2.png';

export const projectState = () => {
  return [
    {
      title: 'ACIS by AIMS',
      mainImg: Acis1,
      secondaryImg: Acis2,
      url: '/work/acis',
      projectDetails: [
        {
          title: 'Project Details.',
          description: `ACIS is an inventory management and order and fulfilment system that enables both Bodyshop’s and cosmetic repairers to order stock automatically on a tablet and manage their paint and consumables more effectively and profitably`,
        },
        {
          title: 'Tech Stack',
          description:
            '“I contriubuted for this project as a fronte-end developer using Angular 10, RxJS,Bootstrap and SASS"',
        },
        {
          title: 'e2e testing',
          description: `Collaborated with the QA team to develop and implement automated end-to-end (E2E) testing for ACIS , to	
            Utilized Cypress to develop and execute automated E2E test cases, ensuring a high level of test coverage and accuracy.`,
        },
      ],
      projectURL: 'https://www.acisaims.com',
      githubRepo: '',
    },
    {
      title: 'BSB V2 (Body Shop Booster Version 2)',
      mainImg: BSB1,
      secondaryImg: BSB2,
      url: '/work/BSB',
      projectDetails: [
        {
          title: 'Project Details.',
          description: `BSB-V2 (Bodyshop Booster) project, which focused on improving customer satisfaction and sales using the latest cloud technologies`,
        },
        {
          title: 'Tech Stack',
          description: `NodeJS, Serverless framework 3 with TypeScript, MongoDB along with Mongoose ODM, MySQL with  TypeORM, ANgular 15, RXJS, NGxs for state mgt. and PrimenNg with Primeflex`,
        },
        {
          title: 'Cutting Edge Serverless Technology',
          description:
            'Contributed for this project using AWS serverless computing which is a powerful paradigm that simplifies application development by removing the need for managing infrastructure, while providing automatic scalability, cost-effectiveness, built-in fault tolerance, easy integration with other services, and faster time-to-market, making it an increasingly popular choice for building scalable, cost-effective, and reliable applications.',
        },
      ],
      projectURL: 'https://www.bodyshopbooster.com//',
      githubRepo: '',
    },
    {
      title: 'MERN e-commerce site',
      mainImg: ecommerce1,
      secondaryImg: ecommerce2,
      url: '/work/e-commerce',
      projectDetails: [
        {
          title: 'Project Details.',
          description:
            '“This project have been done using React, Typescript, Redux(Redux Toolkit) React-Bootstrap,sass,mongodb & graphql. ' +
            'Images hosted on s3 static buckets. You can view a live Demo of this project by clicking the link below."',
        },
        {
          title: 'Fully Mobile Responsive.',
          description:
            '“This project is fully mobile responsive powered with react-bootstrap grid system. Hosted using AWS s3 with ' +
            'images hosted on s3 static buckets"',
        },
        {
          title: 'Fully Customizable',
          description:
            '"This Project is fully customizable according to your business need. Expand your business horizons by digitalizing your business.' +
            'Keep track on your sales & customers in your fingertips.”',
        },
      ],
      projectURL: 'https://teamkitkatstore.codes/',
      githubRepo: 'https://tinyurl.com/4ebcf62p',
    },

    {
      title: 'SmartWear T-shirts',
      mainImg: smartwear,
      url: '/work/SmartWear',
      secondaryImg: smartwear2,
      projectDetails: [
        {
          title: 'Java GUI Project',
          description:
            '“This is Desktop Application developed for the startup SmartWear T-Shirts. This application will be useful ' +
            'to maintain customer,order details and stock management”',
        },
        {
          title: 'MVC architecture.',
          description:
            '“Even though a simple desktop application, MVC architecture combined with OOP principles have been used to ' +
            'improve high cohesion and loose coupling.”',
        },
        {
          title: 'Technical Stack.',
          description:
            '“This project solely pure java(java 8). Java swing have been used to develop the UI”',
        },
      ],
      //projectURL:"https://teamkitkatstore.codes/",
      githubRepo: 'https://tinyurl.com/3usvzye5',
    },
    {
      title: 'Library App',
      mainImg: Library1,
      url: '/work/Library',
      secondaryImg: Library2,
      projectDetails: [
        {
          title: 'Simple Library App',
          description:
            '“This is a very basic app developed to understand the fundamental concepts of React,Typescript, sass, State Management and' +
            'react-bootstrap .”',
        },
        {
          title: 'Fully Mobile Responsive.',
          description:
            '“This project is fully mobile responsive powered with react-bootstrap grid system.”',
        },
        {
          title: 'Live Preview',
          description:
            '“ You can view a live Demo of this project by clicking the link below..”',
        },
      ],
      projectURL: 'https://my-react-library-app.herokuapp.com',
      githubRepo: 'https://tinyurl.com/n5en86zn',
    },
  ];
};
