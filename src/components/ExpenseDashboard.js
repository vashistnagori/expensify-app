import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashboard=(props)=>{
    //console.log(props);
   return(<div>
    <p>this is homepage</p>
    <ExpenseListFilter />
    <ExpenseList />
    </div>);
}
export default ExpenseDashboard;