import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseDashboardMaking} from '../../components/ExpenseDashboard';
import {testexp} from '../fixture/expense';

test("testing ExpenseDashboard component",()=>{
    const wrapper=shallow(<ExpenseDashboardMaking expenses={testexp}/>);
    expect(wrapper).toMatchSnapshot();
});