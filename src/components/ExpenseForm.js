import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css'; now in app.js file

export default class ExpenseForm extends React.Component{
state={
                description: this.props.expense ?  this.props.expense.description : "",
                note: this.props.expense ?  this.props.expense.note : "",
                amount: this.props.expense ? ( this.props.expense.amount / 100).toString() : "",
                createdAt: this.props.expense ?  moment(this.props.expense.createdAt) : moment(),
                calanderFocused:false,
                error:"",
        };
 decriptionChange=(e)=>{
     const description= e.target.value;
     this.setState(()=>({description}));
 };
 noteChange=(e)=>{
    const note= e.target.value;
    this.setState(()=>({note}));
};
amountChange=(e)=>{
    const amount= e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(()=>({amount}));
    }
};
dateChange=(createdAt)=>{
    if(createdAt){
        this.setState(()=>({createdAt}));
    }
}
forcusChange=({focused})=>{
this.setState(()=>({calanderFocused:focused}));
};
formSubmit=(e)=>{
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
        this.setState(()=>({error:"please provide decription and amount"}));
    }
    else{
        this.setState(()=>({error:""}));
        this.props.onSubmit({
            description: this.state.description,
            amount:this.state.amount*100,
            createdAt:this.state.createdAt.valueOf(),
            note: this.state.note
        });
    }
};


    render(){
        return(<div>
           {this.state.error && <p>{this.state.error}</p> } 
            <form onSubmit={this.formSubmit}>
            <input 
            type='text'
            placeholder='description'
            value={this.state.description}
            onChange={this.decriptionChange}
            autoFocus
            />
            <input 
            type='number'
            placeholder='amount'
            value={this.state.amount}
            onChange={this.amountChange}
            />
            <SingleDatePicker
            date={this.state.createdAt} 
            onDateChange={this.dateChange} 
            focused={this.state.calanderFocused}
            onFocusChange={this.forcusChange} 
            numberOfMonths={1}
            isOutsideRange={()=>false}
            />
            <textarea
            placeholder="add a note here"
            value={this.state.note}
            onChange={this.noteChange}>
            </textarea>
            <button>Add Expense</button>
            </form>
            </div>);
    }
}