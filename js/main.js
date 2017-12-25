import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Director, IT",
    'image': {
      'desc': "Example screenshot of a project involving code.",
      'src': "images/code.jpg",
      'comment': ""
    }
  },
  {
    'title': "AWS Certified",
    'image': {
      'desc': "Screenshot of AWS Solutions Architect Associate badge.",
      'src': "images/awssaa.png",
      'comment': ""
    }
  },
  {
    'title': "United States Navy Veteran",
    'image': {
      'desc': "Screenshot of US Naval Special Warfare Officer.",
      'src': "images/USNavy.jpg",
      'comment': ""
    }
  },
  {
    'title': "ReactJS / AWS Serverless Website",
    'image': {
      'desc': "Screenshot of the architecture diagram for this site.",
      'src': "images/port-arch-tn.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
