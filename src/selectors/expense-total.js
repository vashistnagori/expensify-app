
export const expenseTotal=(exp)=>{
  const total =  exp.map((current)=>{
       return current.amount
    }).reduce((acc, curr)=>{
        return acc+curr;
    }, 0);
    return total;
}