import React from 'react';
import {shallow} from 'enzyme';
import {CreateExpense} from '../../components/CreateExpense';
import {testexp} from '../fixture/expense';

let spyfunction, history, wrapper;
beforeEach(()=>{
     spyfunction=jest.fn();
     history={push: jest.fn()};
     wrapper= shallow(<CreateExpense dispatch_addexpenses={spyfunction} history={history}/>);
});


test("testing CreateExpense page",()=>{
    expect(wrapper).toMatchSnapshot(); 
});


test("testing CreateExpense page on submit",()=>{
    wrapper.find("ExpenseForm").prop("onSubmit")(testexp[1]);
    expect(spyfunction).toHaveBeenLastCalledWith(testexp[1]);
    expect(history.push).toHaveBeenCalled();
});