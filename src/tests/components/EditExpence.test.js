import React from 'react';
import {shallow} from 'enzyme';
import {EditExpence} from '../../components/EditExpence';
import {testexp} from '../fixture/expense';

let wrapper, editfunction, history, delfunction ;
beforeEach(()=>{
     editfunction=jest.fn();
     delfunction=jest.fn();
     history={push: jest.fn()};
     wrapper=shallow(<EditExpence dispatch_editExpense={editfunction} history={history} dispatch_removeExpense={delfunction} expense={testexp[1]}/>);
});

test("testing EditExpence page",()=>{
    expect(wrapper).toMatchSnapshot();
});

test("testing EditExpence page onsubmit",()=>{
    wrapper.find("ExpenseForm").prop("onSubmit")(testexp[1]);
    expect(editfunction).toHaveBeenCalledWith(testexp[1].id, testexp[1]);
    expect(history.push).toHaveBeenCalledWith("/dashboard");
});

test("testing EditExpence page onremove",()=>{
    //wrapper.find("button").prop("onClick")({id:testexp[1].id});
    wrapper.find("button").simulate("click");
    expect(delfunction).toHaveBeenCalledWith({id:testexp[1].id});
    expect(history.push).toHaveBeenCalledWith("/dashboard");
});
