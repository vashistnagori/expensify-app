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
      <div className="page-header ">
      <div className="content-container">
      <h1 className="page-header__title">Add Expense</h1>
      </div>
      </div>
      <div className="content-container"> <ExpenseForm onSubmit={this.onSubmit}/></div> 
      </div>);
  }
}

    const mapDispatchToProps=(dispatch)=>({
        dispatch_startAddExpense:(expense)=>dispatch(startAddExpense(expense))
    });

export default connect(undefined, mapDispatchToProps)(CreateExpense);
