import uuid from 'uuid';
import db from '../firebase/firebase'

// export const addExpense=(expense)=>{
//     return {
//         type:"addExpense", 
//         expenseDetail:expense
//     }
//     };

// export const startAddExpense=(expenseData={})=>{
//     const {description='', note='', amount=0, createdAt=''} = expenseData;
//     const expense= {description, note, amount, createdAt};

//  return (dispatch)=>{
//      db.ref('expense').push(expense).then((ref)=>{
//          dispatch(addExpense({id:ref.key, ...expense}));
//      });
//  }
// };
////// startAddExpense or above comment section works same with thunk functionality

export const startAddExpense=(expenseData={})=>{
    const {description='', note='', amount=0, createdAt=''} = expenseData;
    const expense= {description, note, amount, createdAt};
    return (dispatch)=>{
         return db.ref('expense').push(expense).then((ref)=>{
                            dispatch({type:"addExpense", expenseDetail:{id:ref.key, ...expense}});
                    });
                }
};



    
export const removeExpense=({id=0}={})=>{
    return {
        type:"removeExpense", 
        id
    }
    }
    
export const editExpense=(id, updatedExpense)=>{
        return {
            type:"editExpense", 
            id,
            updatedExpense
        }
    }


///////

export const setExpenses=(expense)=>({
type:'SET_EXPENSE',
expense
});



export const startSetExpense=()=>{
    return (dispatch)=>{
        let expense=[];
       return db.ref('expense').once('value').then((snapshot)=>{
          snapshot.forEach((val)=>{
            expense.push({id:val.key,...val.val()});
         });
        }).then(()=>{
            dispatch(setExpenses(expense));
        });
    }
}