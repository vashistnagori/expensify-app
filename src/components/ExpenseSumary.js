import React from 'react';
import numeral from 'numeral';
import {Link} from 'react-router-dom';


export const ExpenseSumary=(props)=>{
    return (<div className="page-header">
    <div className="content-container"> 
    <h1 className="page-header__title">viewing <span>{props.count}</span> expenses totalling <span>{numeral(props.total/100).format('$0,0.00')}</span></h1>
       <div className="page-header__actions">
       <Link className="button" to="/create">add Expense</Link>
       </div> 
       </div>  
        </div>)
}