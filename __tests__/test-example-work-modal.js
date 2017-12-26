import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const myExample = {
    'title': "Director, IT",
    'href': "https://portfolio.kirkferguson.info/",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "Example screenshot of a project involving code.",
      'src': "images/code.jpg",
      'comment': ""
  }
};

describe("ExampleWorkModal component", () => {
  let component = shallow(<ExampleWorkModal example={myExample}
    open={false}/>);
  let openComponent = shallow(<ExampleWorkModal example={myExample}
    open={true}/>);
  let anchors = component.find("a");

  it("Should contain a single 'a' element", () => {
    expect(anchors.length).toEqual(1);
  });

  it("Should link to our project", () => {
    expect(anchors.getElement(0).props.href).toEqual(myExample.href);
  });

  it("Should have the modal class set correctly", () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
    expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
  });
});
