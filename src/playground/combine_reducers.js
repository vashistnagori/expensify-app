import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

////////////////////////////////////////////////////////////////////// Action generators

const addExpense=({description='', note='', amount=0, createdAt=''}={})=>{
return {
    type:"addExpense", 
    expenseDetail:{id:uuid(), description, note, amount, createdAt}
}
}

const removeExpense=({id=0}={})=>{
const newExpenseArray=state.getState().expenses.filter(o => o.id !== id);
return {
    type:"removeExpense", 
    newExpenseArray:newExpenseArray
}
}

const editExpense=(id, newValueObject)=>{
    let updatedExpenseArray=state.getState().expenses.map((current)=>{
        if(current.id === id){
         return {
             ...current,
             ...newValueObject
         }
        }
        else{
          return current;
        }
    });
    //console.log(updatedExpenseArray);
    return {
        type:"editExpense", 
        updatedExpenseArray
    }
}
const setTextFilter=(text="")=>{
    return {
    type:"setTextFilter",
    newFilters:{ ...state.getState().filter,text}
    }
}

const sortByAmount=()=>{
    return {
        type:"sortByAmount"
    }
}

const sortByDate=()=>{
    return {
        type:"sortByDate"
    }
}
const setStartDate=(date)=>{
    return {
        type:"setStartDate",
        startdate:date
    }
}

const setEndDate=(date)=>{
    return {
        type:"setEndDate",
        endDate:date
    }
}
////////////////////////////////////////////////////////////////////// functions
const filterExpense=(exp, { text, SortBy, startDate, endDate})=>{
const filtered_expences=exp.filter((c)=>{
    const match_start_date= typeof startDate !== "number" || c.createdAt >= startDate ;
    const match_end_date=typeof endDate !== "number" || c.createdAt <= endDate;
    const match_text= text==="" || c.description.toLowerCase().indexOf(text.toLowerCase()) > -1;
return match_text && match_start_date && match_end_date;
}).sort((a,b)=>{
if(SortBy=='date'){
    return a.createdAt>=b.createdAt? 1 : -1;
}else if(SortBy=='amount'){
    return a.amount>=b.amount? 1: -1;
}
});
return filtered_expences;
}
////////////////////////////////////////////////////////////////////// Reducers
const expense_reducer=(ps=[],action)=>{
switch(action.type){
case("addExpense"):
return [...ps, action.expenseDetail];
break;
case("editExpense"):
return action.updatedExpenseArray;
break;
case("removeExpense"):
return action.newExpenseArray;
break;
default:
return ps;
}
}
/////////////
const defaultFilterState={
    text:"",
    SortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const filter_reducer=(ps=defaultFilterState,action)=>{
    switch(action.type){
        case("setTextFilter"):
        return action.newFilters;
        break;
        case("sortByAmount"):
        return {...ps, SortBy:'amount'};
        break;
        case("sortByDate"):
        return {...ps, SortBy:'date'};
        break;
        case("setStartDate"):
        return {...ps, startDate:action.startdate};
        break;
        case("setEndDate"):
        return {...ps, endDate:action.endDate};
        break;
        default:
        return ps;
    }
    }
////////////////////////////////////////////////////////////////////// store and subscribe
const state=createStore(
    combineReducers({
    expenses:expense_reducer,
    filter:filter_reducer
}));
state.subscribe(()=>{
    const Realstate = state.getState();
    const filter_result=filterExpense(Realstate.expenses, Realstate.filter);
    console.log(filter_result);
});
////////////////////////////////////////////////////////////////////// dispach
state.dispatch(sortByAmount());
state.dispatch(addExpense({description:"rent", amount:910}));
state.dispatch(addExpense({description:"car", amount:60000, createdAt:1}));
state.dispatch(addExpense({description:"coffee", amount:3, createdAt:100}));
state.dispatch(addExpense({description:"vacation", amount:6000, createdAt:3}));
// state.dispatch(removeExpense({id:expenseOne.expenseDetail.id}));
// state.dispatch(editExpense(expenseTwo.expenseDetail.id,{amount:5}));
// state.dispatch(setTextFilter("rent"));

// state.dispatch(sortByDate());

state.dispatch(setStartDate(0));
//state.dispatch(setTextFilter("co"));
// state.dispatch(setStartDate());

// state.dispatch(setEndDate(1250));

// state.dispatch(setEndDate());


