import React from "react";
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expense';

export class CreateExpense extends React.Component{
  onSubmit=(expense)=>{
    this.props.dispatch_startAddExpense(expense);
    this.props.history.push("/");
  }
  render(){
    return( <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={this.onSubmit}/>
      </div>);
  }
}



    const mapDispatchToProps=(dispatch)=>({
        dispatch_startAddExpense:(expense)=>startAddExpense(expense)(dispatch)
    });

export default connect(undefined, mapDispatchToProps)(CreateExpense);
