import {shallow} from 'enzyme';
import React from 'react';
import {ExpenseSumary} from '../../components/ExpenseSumary';

test("testing ExpenseSumary for 0 total 0 count",()=>{
const wrapper=shallow(<ExpenseSumary total={0} count={0}/>);
expect(wrapper).toMatchSnapshot();
});


test("testing ExpenseSumary for 23 total 2357876 count",()=>{
    const wrapper=shallow(<ExpenseSumary total={23} count={2357876}/>);
    expect(wrapper).toMatchSnapshot();
    });