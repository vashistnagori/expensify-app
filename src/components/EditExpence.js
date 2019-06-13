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
      this.props.history.push("/");
   }
   onDelFun=(e)=>{
      this.props.dispatch_removeExpense({id:this.props.expense.id});
      this.props.history.push("/");
     }

   render(){
      return(
             <div>
             <ExpenseForm 
              expense={this.props.expense}  
              onSubmit={this.onSubmitfun}/>
              <button onClick={this.onDelFun}>remove</button>
             </div>
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
   dispatch_removeExpense:({id})=>startRemoveExpense({id})(dispatch),
   dispatch_editExpense:(id, expense)=> startEditExpense(id, expense)(dispatch)
}
}


export default connect(mapStateToProps, mapDispatchToProps)(EditExpence);