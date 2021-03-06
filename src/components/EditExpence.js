import React from "react";
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense, startRemoveExpense, startEditExpense} from '../actions/expense';

// export const EditExpence=(props)=>{
//    return(
//     <div>
//     <ExpenseForm 
//      expense={props.expense}  
//      onSubmit={(expense)=>{
//         props.dispatch_editExpense(props.expense.id, expense);
//         props.history.push("/");
//      }}/>
//      <button onClick={(e)=>{
//         props.dispatch_removeExpense({id:props.expense.id});
//         props.history.push("/");
//        }}>remove</button>
//     </div>
//     );
//    }

export class EditExpence extends React.Component{
   onSubmitfun=(expense)=>{
      this.props.dispatch_editExpense(this.props.expense.id, expense);
      this.props.history.push("/dashboard");
   }
   onDelFun=(e)=>{
      this.props.dispatch_removeExpense({id:this.props.expense.id});
      this.props.history.push("/dashboard");
     }

   render(){
      return(<div>
         <div className="page-header ">
         <div className="content-container">
         <h1 className="page-header__title">Edit Expense</h1>
         </div>
         </div>
         <div className="content-container">
             <ExpenseForm 
              expense={this.props.expense}  
              onSubmit={this.onSubmitfun}/>
              <button className="button button-secondary" onClick={this.onDelFun} >Remove Expense</button>
             </div></div>
             );
   }
}

const mapStateToProps=(state, props)=>{
   const expense= state.expenses.find((e)=>{
      return e.id === props.match.params.id;
   });
   if(expense){ return {expense}; } else{ return {};  }
}

const mapDispatchToProps=(dispatch)=>{
return{
   dispatch_removeExpense:({id})=>dispatch(startRemoveExpense({id})),
   dispatch_editExpense:(id, expense)=> dispatch(startEditExpense(id, expense))
}
}


export default connect(mapStateToProps, mapDispatchToProps)(EditExpence);