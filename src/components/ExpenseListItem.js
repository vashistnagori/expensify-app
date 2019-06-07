import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem= ({id, description, amount, createdAt})=>{
    const to="/edit/"+id;
return (
    <div>
    <Link to={to}> <h3>{description}</h3></Link>
   <p>
   {numeral(amount / 100).format('$0,0.00')}  
   - 
   {moment(createdAt).format('MMMM Do, YYYY')}</p> 
   <hr/>
    </div>
)}
;

export default ExpenseListItem;
