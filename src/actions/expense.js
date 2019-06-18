import uuid from 'uuid';
import db from '../firebase/firebase'

export const startAddExpense=(expenseData={})=>{
    const {description='', note='', amount=0, createdAt=''} = expenseData;
    const expense= {description, note, amount, createdAt};
    return (dispatch, getState)=>{
        const uid= getState().auth.uid;
         return db.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
                            dispatch({type:"addExpense", expenseDetail:{id:ref.key, ...expense}});
                    });
                }
};


///////////////////////////////////////////////////////////////
    
export const removeExpense=({id=0}={})=>{
    return {
        type:"removeExpense", 
        id
    }
    }
export const startRemoveExpense=({id=0}={})=>{
    return (dispatch,getState)=>{
        const uid= getState().auth.uid;
        return db.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
        dispatch(removeExpense({id}))
    });
}
}
///////////////////////////////////////////////////////////////
    
export const editExpense=(id, updatedExpense)=>{
        return {
            type:"editExpense", 
            id,
            updatedExpense
        }
    };
/// using Update method on firebase would be a better idea in the below action generator, but i did it so i will stick to it for now

export const startEditExpense=(id, updatedExpense)=>{
    return (dispatch,getState)=>{
        const uid= getState().auth.uid;
        return db.ref(`users/${uid}/expenses/${id}`).once("value").then((snap)=>{
            return snap.val();
        }).then((old_val)=>{
            const new_val={...old_val, ...updatedExpense};
            db.ref(`users/${uid}/expenses/${id}`).set(new_val);
        }).then(()=>{
            dispatch(editExpense(id, updatedExpense));
        });
    }
}


///////////////////////////////////////////////////////////////
export const setExpenses=(expenses)=>({
type:'setExpense',
expenses
});


export const startSetExpense=()=>{
return (dispatch,getState)=>{
let expenses=[];
const uid= getState().auth.uid;
    return db.ref(`users/${uid}/expenses`).once('value')
    .then((snapshot)=>{
        snapshot.forEach((val)=>{
        expenses.push({id:val.key,...val.val()});
    });
    })
    .then(()=>{
        dispatch(setExpenses(expenses));
    })
    .catch((e)=>console.log(e));
}
}


