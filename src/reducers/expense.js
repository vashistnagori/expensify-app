
export const expense_reducer=(ps=[],action)=>{
    switch(action.type){
    case("addExpense"):
    return [...ps, action.expenseDetail];
    break;
    case("editExpense"):
    let updatedExpenseArray=ps.map((current)=>{
        if(current.id === action.id){
         return {
             ...current,
             ...action.updatedExpense
         }
        }
        else{
          return current;
        }
    });
    return updatedExpenseArray;
    break;
    case("removeExpense"):
    return ps.filter(o => o.id !== action.id);;
    break;
    case("SET_EXPENSE"):
    return action.expense;
    break;
    default:
    return ps;
    }
    };