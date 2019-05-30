import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import {testexp} from '../fixture/expense';

test("testing ExpenseForm to create new expense- no data",()=>{
    const wrapper= shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});


test("testing ExpenseForm to edit expense- with data",()=>{
    const expense_data = testexp[3];
    const wrapper= shallow(<ExpenseForm expense={expense_data}/>);
    expect(wrapper).toMatchSnapshot();
});


test("testing ExpenseForm for error message",()=>{
    const wrapper= shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit",{preventDefault:()=>{}});
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});


test("testing ExpenseForm for decription change",()=>{
    const decription_value="tesing decription";
    const wrapper= shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate("change",{
       target:{value:decription_value}
   });
   expect(wrapper.state('description')).toBe(decription_value);
});


test("testing ExpenseForm for Note change",()=>{
    const Note_value="tesing Note";
    const wrapper= shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate("change",{
       target:{value:Note_value}
   });
   expect(wrapper.state('note')).toBe(Note_value);
});


test("testing ExpenseForm for Amount change with valid input",()=>{
    const amountValue="23.50";
    const wrapper= shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate("change",{
       target:{value:amountValue}
   });
  expect(wrapper.state('amount')).toBe("23.50");
});


test("testing ExpenseForm for Amount change with Invalid input",()=>{
    const amountValue="12.122";
    const wrapper= shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate("change",{
       target:{value:amountValue}
   });
  expect(wrapper.state('amount')).toBe("");
});

test("testing ExpenseForm for onSubmit",()=>{
    const SpyOnSubmitFunction= jest.fn();
    const wrapper= shallow(<ExpenseForm expense={testexp[1]} onSubmit={SpyOnSubmitFunction}/>);
    wrapper.find('input').at(0).simulate('change',{target:{value:"somthingnew"}});
    wrapper.find('form').simulate('submit',{preventDefault:()=>{}});
    expect(wrapper.state("error").length).toBeLessThan(1);
    expect(SpyOnSubmitFunction).toHaveBeenCalledWith({
          description: "somthingnew",
            amount: testexp[1].amount,
            createdAt:testexp[1].createdAt,
            note: testexp[1].note
    });

});



test("testing ExpenseForm for Date change",()=>{
    const now=moment();
    const wrapper= shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop("onDateChange")(now);
    expect(wrapper.state("createdAt")).toEqual(now);
});


test("testing ExpenseForm for calander focus change",()=>{
const wrapper= shallow(<ExpenseForm/>);
wrapper.find('SingleDatePicker').prop("onFocusChange")({focused:true});
expect(wrapper.state("calanderFocused")).toBe(true);
});
