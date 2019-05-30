import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem= ({id, description, amount, createdAt})=>{
    const to="/edit/"+id;
return (
    <div>
    <Link to={to}> <h3>{description}</h3></Link>
   <p>{amount}  - {createdAt}</p> 
   <hr/>
    </div>
)}
;

export default ExpenseListItem;
