import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import {filterExpense} from '../selectors/expense';


// const ExpenseList =(props)=>{
//     const expenseListItems= props.expenses.map((c)=>{
//        return (<div>
//         <ExpenseListItem key={"list"+c.id} {...c} />
//        </div>);
//     });
//     return (<div>{expenseListItems}</div>);
// };

export const ExpenseList =(props)=>(<div>
{
    props.expenses.length !== 0 ? (props.expenses.map((c)=>{
                                        return (<div>
                                        <ExpenseListItem key={"list"+c.id} {...c} />
                                        </div>);
                                        })
    ) : (<p>No Expenses</p>)
}
    </div>);


const mapStateToProps=(state)=>{
    return {
        expenses: filterExpense(state.expenses,state.filter)
    }
}

export default connect(mapStateToProps)(ExpenseList);
