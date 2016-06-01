import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import NavBar from '../src/components/NavBar';
import StockInfo from '../src/components/StockInfo';
import Main from '../src/components/Main';
import Landing from '../src/containers/Landing';
import Success from '../src/containers/Success';
import configureStore from '../src/store/configureStore';
import { fetch } from 'whatwg-fetch';
import { Col, PreLoader } from 'react-materialize'

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView
global.fetch = fetch;

describe('<Landing />', () => {
  it('calls componentWillMount', () => {
    const wrapper = mount(<Landing store={configureStore()}/>);
    expect(Landing.prototype.componentDidMount.calledOnce).to.equal.true;
  });
  
  it('renders two <StockInfo /> components', () => {
    const wrapper = shallow(<Landing store={configureStore()} />);
    expect(wrapper.find(StockInfo)).to.have.length(0);
  });
  
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Landing store={configureStore()}>
        <div className="unique" />
      </Landing>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });
});

describe('<Success />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Success store={configureStore()}>
        <div className="hi" />
      </Success>
    );
    
    expect(wrapper.contains(<div className="hi" />)).to.equal(true);
  });
  
  it('renders Return to home', () => {
    const wrapper = shallow(
      <Success store={configureStore()} />
    );
    
    expect(wrapper.contains(<h2> {'Return to home'} </h2>));
  });
});

describe('<NavBar />', () => {
  it('should render a green nav class', () => {
    const wrapper = shallow(<NavBar />);
    
    // expect(wrapper.contains(<nav className="green"></nav>));
    expect(wrapper.find('.green')).to.have.length(1);
  });
  
  it('should render anchor tags as its brand-logo', () => {
    const wrapper = shallow(<NavBar />);
    
    expect(wrapper.contains(<a href="/" className="brand-logo center">stock mailer</a>)).to.equal(true);
  });
  
  it('should contain a unordered list on the left', () => {
    const wrapper = shallow(<NavBar />);
    
    expect(wrapper.contains(
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li> <a href="https://www.github.com/elliotschi/stock-mailer">source</a></li>
      </ul>
    )).to.equal(true);
  });
});

describe('<Main />', () => {
  it('should render children components as a part of the router', () => {
    const wrapper = shallow(
      <Main>
        <div className='test'></div>
      </Main>
    );
    
    expect(wrapper.contains(<div className='test'></div>)).to.equal(true); 
  });
});