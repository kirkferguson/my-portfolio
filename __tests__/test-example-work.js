import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
  }
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork}/>);

  it("Should be a 'section' element.", () => {
    expect(component.type()).toEqual('section');
  });

  it("Should contain as many children as there are work examples.", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });
});

describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWork[1]}/>);
  let images = component.find("img");

  it("Should contain a single 'img' element.", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have the image src set correctly.", () => {
    expect(images.getElement(0).props.src).toEqual(myWork[1].image.src);
  });
});
