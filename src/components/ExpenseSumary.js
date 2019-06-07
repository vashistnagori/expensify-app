import React from 'react';
import numeral from 'numeral';


export const ExpenseSumary=(props)=>{

    return (<div>viewing {props.count} expenses totalling {numeral(props.total/100).format('$0,0.00')}</div>)

}