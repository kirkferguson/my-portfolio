import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Director, IT",
    'href': "https://portfolio.kirkferguson.info/",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "Example screenshot of a project involving code.",
      'src': "images/code.jpg",
      'comment': ""
    }
  },
  {
    'title': "AWS Certified",
    'href': "https://portfolio.kirkferguson.info/",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "Screenshot of AWS Solutions Architect Associate badge.",
      'src': "images/awssaa.png",
      'comment': ""
    }
  },
  {
    'title': "United States Navy Veteran",
    'href': "https://portfolio.kirkferguson.info/",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "Screenshot of US Naval Special Warfare Officer.",
      'src': "images/USNavy.jpg",
      'comment': ""
    }
  },
  {
    'title': "ReactJS / AWS Serverless Website",
    'href': "https://github.com/kirkferguson/my-portfolio",
    'desc': "As a Director of IT " +
            "for a large company, it's rare that I have the opportunity " +
            "to code as part of my professional responsibility.  However, I'll often " +
            "feed my passion for technology and stay abreast of industry trends " +
            "with demo projects such as this Portfolio site during my evenings.  " +
            "The site was built using several technologies as an example of general " +
            "concept understanding for ReactJS and AWS Serverless website development in the following areas:  " +
            "Source Control: Git and GitHub, " +
            "Security and Access Control: Identity Access Manager, " +
            "DNS Management: Route 53, " +
            "Object Storage: S3, " +
            "Content Distribution: CloudFront, " +
            "Build Tools: CodeBuild & CodePipeline, " +
            "Functions as a Service: Lambda, " +
            "Page Structure: HTML, " +
            "Look and feel: CSS, " +
            "Interactivity: Javascript (React), " +
            "Cross-Browser Compatability: Babel, " +
            "Bundling & Asset Management: Webpack, " +
            "Package Management: NPM, " +
            "Testing: Jest (or Chai & Mocha).",
    'image': {
      'desc': "Screenshot of the architecture diagram for this site.",
      'src': "images/port-arch-tn.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
