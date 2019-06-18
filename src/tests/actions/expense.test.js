import * as expense_actions from '../../actions/expense';
import {expense_reducer} from '../../reducers/expense';
import {testexp} from '../fixture/expense';
import configureMockStore from 'redux-mock-store';
import moment from 'moment';
import thunk from 'redux-thunk';
import db from '../../firebase/firebase';

const createMockStore=configureMockStore([thunk]);
const uid='thisIsMytestUID';
const defaultAuthState={auth:{uid}};
///////////////////////////////////////////////////////
beforeEach((done)=>{
const expenseData={};
testexp.forEach(({id, description, note, amount, createdAt})=>{
    expenseData[id]={description, note, amount, createdAt};
});
db.ref(`users/${uid}/expenses`).set(expenseData).then(()=>{
    done();
});
});

///////////////////////////////////////////////////////
test("Remove Expense action testing",()=>{
    expect(expense_actions.removeExpense({id:"abc123"})).toEqual({
        type:"removeExpense", 
        id:"abc123"
    });
    });

test("testing Start remove expense",(done)=>{
    const store=createMockStore(defaultAuthState);
    const id=testexp[0].id;
    store.dispatch(expense_actions.startRemoveExpense({id})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({type:"removeExpense", id});
       return db.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBe(null);
        done();
    })
    .catch((e)=>console.log(e));

});

// ///////////////////////////////////////////////////////
test("EDIT expense action testing",()=>{
    expect(expense_actions.editExpense("abc123", {description:"lastest updated rent", amount:910})).toEqual({
    type:"editExpense", 
    id:"abc123",
    updatedExpense: {description:"lastest updated rent", amount:910}
    });
    });

test("Testing startEditExpense",(done)=>{
    const store=createMockStore(defaultAuthState);
    const id=4;
    const updatedExpense={amount:108};
    store.dispatch(expense_actions.startEditExpense(id,updatedExpense))
    .then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({ type:"editExpense", id, updatedExpense});
        return db.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then((snap)=>{
    expect(snap.val())
    .toEqual({description:'mobile', note:'', amount:110, createdAt:moment(0).add(28,'days').valueOf(), ...updatedExpense });
    done();
    })
    .catch((e)=>console.log(e));
});

// ///////////////////////////////////////////////////////
test("should add expense to database and store",(done)=>{
const store=createMockStore(defaultAuthState);
const expenseData={description:'gym', note:'', amount:25, createdAt:moment(0).subtract(4,'days').valueOf()};
store.dispatch(expense_actions.startAddExpense(expenseData))
 .then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({type:"addExpense", expenseDetail:{id:expect.any(String), ...expenseData}});
      return db.ref(`users/${uid}/expenses/${actions[0].expenseDetail.id}`).once('value');
}).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData);
    done();
    })
.catch((e)=>console.log(e));
});




test("should add expense with defaults to database and store",(done)=>{
    const store=createMockStore(defaultAuthState);
    const expenseData={description:'gym', note:'', amount:25, createdAt:moment(0).subtract(4,'days').valueOf()};
    const defaultExpense= {description:'', note:'', amount:0, createdAt:''};
    store.dispatch(expense_actions.startAddExpense())
     .then(()=>{
            const actions = store.getActions();
            expect(actions[0]).toEqual({type:"addExpense", expenseDetail:{id:expect.any(String), ...defaultExpense}});
            return db.ref(`users/${uid}/expenses/${actions[0].expenseDetail.id}`).once('value')
    })
    .then((snapshot)=>{
        expect(snapshot.val()).toEqual(defaultExpense);
        done();
        })
    .catch((e)=>console.log(e));  
});            


test("tesing SET Expense action generator", ()=>{
   const action= expense_actions.setExpenses(testexp);
   expect(action).toEqual({type:'setExpense', expenses:testexp});

});

test("should set expense work",()=>{
    const action= expense_actions.setExpenses(testexp[2]);
    const state= expense_reducer(testexp,action);
    expect(state).toEqual(testexp[2]);
});

test("should fetch expense from firebase",(done)=>{
    const store=createMockStore(defaultAuthState);
    let expenses=[];
    db.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
        snapshot.forEach((val)=>{ expenses.push({id:val.key,...val.val()});  });
       })
       .then(()=>{
             store.dispatch(expense_actions.startSetExpense()).then(()=>{
            const actions =store.getActions();
            expect(actions[0]).toEqual({type:'setExpense', expenses});
            done();
          });
      })
      .catch((e)=>console.log(e));   
});

