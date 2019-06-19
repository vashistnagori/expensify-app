import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import {ExpenseSumary} from './ExpenseSumary';
import {connect} from 'react-redux';
import {expenseTotal} from '../selectors/expense-total';


export const ExpenseDashboardMaking=(props)=>{
const total= expenseTotal(props.expenses);
   return(<div>
    <ExpenseSumary total={total} count={props.expenses.length}/>
    <ExpenseListFilter />
    <ExpenseList />
    </div>);
}

const mapStateToProps =(state)=>({
    expenses:state.expenses
});

const ExpenseDashboard= connect(mapStateToProps)(ExpenseDashboardMaking);


export default ExpenseDashboard;