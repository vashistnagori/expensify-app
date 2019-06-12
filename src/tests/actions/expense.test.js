import * as expense_actions from '../../actions/expense';
import {testexp} from '../fixture/expense';
import configureMockStore from 'redux-mock-store';
import moment from 'moment';
import thunk from 'redux-thunk';
import db from '../../firebase/firebase';

const createMockStore=configureMockStore([thunk]);


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


// test("ADD expense action testing WITH DEFAULT VALUES",()=>{
//     expect(expense_actions.addExpense()).toEqual({
//         type:"addExpense", 
//         expenseDetail:{id:expect.any(String), description:'', note:'', amount:0, createdAt:''}
//     });
//                                                                  });


// test("ADD expense action testing WITH SOME VALUES",()=>{
//     const toAdd= {description:'tea', amount:5, };
//     expect(expense_actions.addExpense(toAdd)).toEqual({
//         type:"addExpense", 
//         expenseDetail:{id:expect.any(String), description:'', note:'', amount:0, createdAt:'', ...toAdd}
//     });
//                                                                 });


test("should add expense to database and store",(done)=>{
const store=createMockStore({});
const expenseData={description:'gym', note:'', amount:25, createdAt:moment(0).subtract(4,'days').valueOf()};
 expense_actions.startAddExpense(expenseData)(store.dispatch)
 .then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({type:"addExpense", expenseDetail:{id:expect.any(String), ...expenseData}});
       return db.ref(`expense/${actions[0].expenseDetail.id}`).once('value')
})
.then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData);
    done();
    })
.catch((e)=>console.log(e));
});




test("should add expense with defaults to database and store",(done)=>{
    const store=createMockStore({});
    const expenseData={description:'gym', note:'', amount:25, createdAt:moment(0).subtract(4,'days').valueOf()};
    const defaultExpense= {description:'', note:'', amount:0, createdAt:''};
     expense_actions.startAddExpense()(store.dispatch)
     .then(()=>{
            const actions = store.getActions();
            expect(actions[0]).toEqual({type:"addExpense", expenseDetail:{id:expect.any(String), ...defaultExpense}});
            return db.ref(`expense/${actions[0].expenseDetail.id}`).once('value')
    })
    .then((snapshot)=>{
        expect(snapshot.val()).toEqual(defaultExpense);
        done();
        })
    .catch((e)=>console.log(e));  
});            




// test("should add expense with defaults to database and store 2",(done)=>{
//     const store=createMockStore({});
//     const defaultExpense= {description:'', note:'', amount:0, createdAt:''};
//            expense_actions.startAddExpense()(store.dispatch);
//             const actions = store.getActions();
//             expect(actions[0]).toEqual({type:"addExpense", expenseDetail:{id:expect.any(String), ...defaultExpense}});

 
// });            