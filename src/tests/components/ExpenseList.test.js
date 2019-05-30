import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import {testexp} from '../fixture/expense';

test("testing ExpenseList component with values",()=>{
const wrapper=shallow(<ExpenseList expenses={testexp} />);
expect(wrapper).toMatchSnapshot();
});

test("testing ExpenseList component with No values",()=>{
    const wrapper=shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
    });
    