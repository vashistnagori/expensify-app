import { expense_reducer } from "../../reducers/expense";
import {testexp} from '../fixture/expense';
import moment from 'moment';
// default test
test("Testing Expense reducer with the INIT action(default state)",()=>{
   const state=expense_reducer(undefined, {type:"@@INIT"});
    expect(state).toEqual([]);
});

// testing remove expense with valid id
test("Testing remove expense in expense reducer",()=>{
    const state=expense_reducer(testexp, {type:"removeExpense",id:"3"});
    const result=[testexp[0],testexp[1],testexp[3],testexp[4]];
     expect(state).toEqual(result);
 });

 // testing remove expense with InVALID id
test("Testing remove expense in expense reducer",()=>{
    const state=expense_reducer(testexp, {type:"removeExpense",id:"-1"});
     expect(state).toEqual(testexp);
 });


 // testing ADD expense 
test("Testing ADD expense in expense reducer",()=>{
   const newExpenseToAdd={ id:"100",description:'vacation', note:'', amount:25000, createdAt:moment(0).add(40,'days').valueOf()};
    const state=expense_reducer(testexp, {type:"addExpense",expenseDetail:newExpenseToAdd});
     expect(state).toEqual([...testexp, newExpenseToAdd]);
 });


 // testing Edit expense 
test("Testing Edit expense in expense reducer",()=>{
     const state=expense_reducer(testexp, {type:"editExpense",id:"3", updatedExpense:{amount:300}});
      expect(state).toEqual([testexp[0],testexp[1],{id:"3", description:'food', note:'', amount:300, createdAt:moment(0).add(8,'days').valueOf()},testexp[3],testexp[4]]);
  });


 // testing Edit expense with invalid id
 test("Testing Edit expense with InVALID id in expense reducer",()=>{
    const state=expense_reducer(testexp, {type:"editExpense",id:"-1", updatedExpense:{amount:300}});
     expect(state).toEqual(testexp);
 });
 