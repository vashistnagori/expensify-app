import React from 'react';
import {shallow } from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

test("Testing login Page component",()=>{
const wrapper= shallow(<LoginPage startLogin={()=>{}}/>);
expect(wrapper).toMatchSnapshot();
});

test("Testing login function on login Page ",()=>{
    const skyLoginFunction=jest.fn();
    const wrapper= shallow(<LoginPage startLogin={skyLoginFunction}/>);
    wrapper.find('button').simulate("click");
    expect(skyLoginFunction).toHaveBeenCalledWith();
    });