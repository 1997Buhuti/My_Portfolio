//Import Images
import ecommerce1 from './img/ecommerce1.JPG';
import ecommerce2 from './img/ecommerce2.JPG';
import smartwear from './img/smartwear.JPG';
import smartwear2 from './img/smartwear2.JPG';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';

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
      mainImg: theracer,
      url: '/work/Library',
      secondaryImg: theracer2,
      projectDetails: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
      projectURL:"https://teamkitkatstore.codes/",
      githubRepo:""
    },
  ];
};
