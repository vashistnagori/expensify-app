import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import {filterExpense} from '../selectors/expense';


export const ExpenseList =(props)=>(<div className="content-container">
<div className="list-header">
<div className="show-for-mobile">Expenses</div> 
<div className="show-for-desktop">Expense</div>
<div className="show-for-desktop">Amount</div>
 </div> <div className="list-body ">
{
    props.expenses.length !== 0 ? (props.expenses.map((c)=>{
                                        return (<div>
                                        <ExpenseListItem key={"list"+c.id} {...c} />
                                        </div>);
                                        })
    ) : (<div className="list-item--message ">
        <span>No Expenses</span></div>)
}
    </div></div>);


const mapStateToProps=(state)=>{
    return {
        expenses: filterExpense(state.expenses,state.filter)
    }
}

export default connect(mapStateToProps)(ExpenseList);
