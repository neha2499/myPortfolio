import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    proglang,
    Database,
    DevTools,
    technolgies,
    OperratingSystem,
    framework,
    Others,
    springBoot,
    java,
    jenkins,
    sql,
    aws,
    python,
    kubernetes,
    swagger,
    cdn,
    grpc,
    eventy,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Skills",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "CI/CD Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Microservices Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "SpringBoot",
      icon: springBoot,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "jenkins",
      icon: jenkins,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "My Sql",
      icon: sql,
    },
    {
      name: "Html",
      icon: html,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
    {
      name: "AWS",
      icon: aws,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  const skills=[{

    title: "Programming Languages",
    icon: proglang,
    iconBg: "#E6DEDD",
    points: "Java | JavaScript | Python | HTML | CSS"

  },{

    title: "Frameworks",
    icon: framework,
    iconBg: "#E6DEDD",
    points: "Spring Boot | React-Node.js | Agile framework"

  },
  {

    title: "Technologies",
    icon: technolgies,
    iconBg: "#E6DEDD",
    points: "Rest API | GRPC | RabbitMQ | Multi-threading | Postman | Docker | CI/CD pipeline | Kubernetes | Ansible"

  },
  {

    title: "Database",
    icon: Database,
    iconBg: "#E6DEDD",
    points: "MongoDB | Mysql"

  },
  {

    title: "Developer Tools",
    icon: DevTools,
    iconBg: "#E6DEDD",
    points: "Apache Maven | Git | Jenkins | Jira"

  },
  {

    title: "Operating Systems",
    icon: OperratingSystem,
    iconBg: "#E6DEDD",
    points: "Linux | Windows"

  },
  {

    title: "Others",
    icon: Others,
    iconBg: "#E6DEDD",
    points: "OOPs concept | AWS EC2 | Oracle Cloud Instance"

  }]
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Content Delivery Network",
      description:
        "The project aims to create a web application to develop a Content Delivery Network. The project optimizes content transmission by duplicating and distributing it to substitute servers at the edge of the Internet, reducing network and server traffic for faster user responses.",
      tags: [
        {
          name: "Express.js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "AWS S3 bucket",
          color: "pink-text-gradient",
        },
      ],
      image: cdn,
      source_code_link: "https://github.com/neha2499/ContentDeliveryNetwork",
    },
    {
      name: "Skiing Industry Digitization",
      description:
        "The Objective is to create a client/server distributed system model for ski resorts. The idea is to develop RestAPI in order to have ski resorts employ RFID lift ticket readers to automatically log the skier’s ID and ride duration each time they use a ski lift.",
      tags: [
        {
          name: "SpringBoot",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Oracle Cloud Instance",
          color: "blue-text-gradient",
        },
      ],
      image: swagger,
      source_code_link: "https://github.com/neha2499/Skiing_Industry_Digitization",
    },
    {
      name: "Eventy",
      description:
        "Eventy is the web application tool for organizing the successful event. Managing the event is the arduous responsibility irrespective of the event type. Along with that it is crucial to gather important feedback from the attendee to analyze the principal elements for future references.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "AWS Ec2",
          color: "pink-text-gradient",
        },
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
      ],
      image: eventy,
      source_code_link: "https://github.com/ermayank/eventy",
    },
    {
      name: "Educational Cost Statistics",
      description:
        "The project involves creating protobuff files, GRPC services, and client-server code to facilitate RPC calls and Leveraged MongoDB Aggregation pipeline to handle large and complex data processing tasks on a public data source.",
      tags: [
        {
          name: "SpringBoot",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB aggregation pipeline",
          color: "green-text-gradient",
        },
        {
          name: "grpc",
          color: "pink-text-gradient",
        },
        {
          name: "CI/CD",
          color: "blue-text-gradient",
        },
      ],
      image: grpc,
      source_code_link: "https://github.com/neha2499/grpc_spring_boot",
    },
  ];
  
  export { services, technologies, experiences, skills, testimonials, projects };