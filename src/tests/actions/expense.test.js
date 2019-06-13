import * as expense_actions from '../../actions/expense';
import {expense_reducer} from '../../reducers/expense';
import {testexp} from '../fixture/expense';
import configureMockStore from 'redux-mock-store';
import moment from 'moment';
import thunk from 'redux-thunk';
import db from '../../firebase/firebase';

const createMockStore=configureMockStore([thunk]);

beforeEach((done)=>{
const expenseData={};
testexp.forEach(({id, description, note, amount, createdAt})=>{
    expenseData[id]={description, note, amount, createdAt};
});
db.ref('expense').set(expenseData).then(()=>{
    done();
});
});

test("Remove Expense action testing",()=>{
    expect(expense_actions.removeExpense({id:"abc123"})).toEqual({
        type:"removeExpense", 
        id:"abc123"
    });
    });

test("testing Start remove expense",(done)=>{
    const store=createMockStore({});
    const id=testexp[0].id;
    expense_actions.startRemoveExpense({id})(store.dispatch).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({type:"removeExpense", id});
       return db.ref(`expense/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBe(null);
        done();
    })
    .catch((e)=>console.log(e));

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


test("tesing SET Expense action generator", ()=>{
   const action= expense_actions.setExpenses(testexp);
   expect(action).toEqual({type:'SET_EXPENSE', expense:testexp});

});

test("should set expense work",()=>{
    const action= expense_actions.setExpenses(testexp[2]);
    const state= expense_reducer(testexp,action);
    expect(state).toEqual(testexp[2]);
});

test("should fetch expense from firebase",(done)=>{
    const store=createMockStore({});
    let expense=[];
    db.ref('expense').once('value').then((snapshot)=>{
        snapshot.forEach((val)=>{
          expense.push({id:val.key,...val.val()});
       });
      }).then(()=>{
        expense_actions.startSetExpense()(store.dispatch).then(()=>{
            const actions =store.getActions();
            expect(actions[0]).toEqual({type:'SET_EXPENSE', expense:expense});
            done();
          });
      });   
});

