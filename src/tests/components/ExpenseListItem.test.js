import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import {testexp} from '../fixture/expense';

test("testing ExpenseListItem with one expense data",()=>{
   const wrapper=shallow(<ExpenseListItem {...testexp[3]} />);
   expect(wrapper).toMatchSnapshot();
});