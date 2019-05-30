import * as expense_actions from '../../actions/expense';

test("Remove Expense action testing",()=>{
    expect(expense_actions.removeExpense({id:"abc123"})).toEqual({
        type:"removeExpense", 
        id:"abc123"
    });
    });


test("EDIT expense action testing",()=>{
    expect(expense_actions.editExpense("abc123", {description:"lastest updated rent", amount:910})).toEqual({
    type:"editExpense", 
    id:"abc123",
    updatedExpense: {description:"lastest updated rent", amount:910}
    });
    });


test("ADD expense action testing WITH DEFAULT VALUES",()=>{
    expect(expense_actions.addExpense()).toEqual({
        type:"addExpense", 
        expenseDetail:{id:expect.any(String), description:'', note:'', amount:0, createdAt:''}
    });
                                                                 });


test("ADD expense action testing WITH SOME VALUES",()=>{
    const toAdd= {description:'tea', amount:5, };
    expect(expense_actions.addExpense(toAdd)).toEqual({
        type:"addExpense", 
        expenseDetail:{id:expect.any(String), description:'', note:'', amount:0, createdAt:'', ...toAdd}
    });
                                                                });
