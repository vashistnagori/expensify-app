import React from 'react';
import {shallow} from 'enzyme';
import NotFound from '../../components/NotFound';

test("testing not found component",()=>{
    const wrapper=shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
});