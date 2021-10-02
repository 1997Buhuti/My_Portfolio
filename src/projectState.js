//Import Images
import ecommerce1 from './img/ecommerce1.JPG';
import ecommerce2 from './img/ecommerce2.JPG';
import smartwear from './img/smartwear.JPG';
import smartwear2 from './img/smartwear2.JPG';
import Library1 from './img/Library1.JPG';
import Library2 from './img/Library2.JPG';


export const projectState = () => {
  return [
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
      projectURL:"https://teamkitkatstore.codes/",
      githubRepo:"https://tinyurl.com/4ebcf62p"
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
      githubRepo:"https://tinyurl.com/3usvzye5"
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
      projectURL:"https://my-react-library-app.herokuapp.com",
      githubRepo:"https://tinyurl.com/n5en86zn"
    },
  ];
};
