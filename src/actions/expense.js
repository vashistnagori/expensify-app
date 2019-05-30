import uuid from 'uuid';

export const addExpense=({description='', note='', amount=0, createdAt=''}={})=>{
    return {
        type:"addExpense", 
        expenseDetail:{id:uuid(), description, note, amount, createdAt}
    }
    }
    
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
