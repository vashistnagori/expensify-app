import React from 'react';
import {connect} from 'react-redux';
import * as filters_Actions from "../actions/filters";
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilter extends React.Component{
    state={
        calanderFocused:null,

    };
    onDateChange=(dates)=>{
        this.props.dispatch_setStartDate(dates.startDate);
        this.props.dispatch_setEndDate(dates.endDate);
    };
    onFocusChange=(f)=>{
            this.setState(()=>({
                calanderFocused:f
            }))
    };
    onTextChange=(e)=>{
        this.props.dispatch_setTextFilter(e.target.value);
    };
    onSortChange=(e)=>{
        if(e.target.value=="Date"){
         this.props.dispatch_sortByDate();
        }
        else if(e.target.value=="Amount"){
         this.props.dispatch_sortByAmount();
     }
     };
render(){
    return(<div>
        <input type="text" 
        value={this.props.filters.text} 
        onChange={this.onTextChange}/>
        <select
         value={this.props.filters.SortBy} 
         onChange={this.onSortChange}>
        <option>Date</option>
        <option>Amount</option>
        </select>
        <DateRangePicker
        startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
        endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
        onDatesChange={this.onDateChange} // PropTypes.func.isRequired,
        focusedInput={this.state.calanderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
        numberOfMonths={1}
        isOutsideRange={()=>false}
        showClearDates={true}
        />
        </div>);
};
};
    const stateMapToProps=(state)=>{
        return {
            filters:state.filter
        }
    };

    const DispatchToProps=(dispatch)=>{
        return {
            dispatch_setTextFilter:(text)=>dispatch(filters_Actions.setTextFilter(text)),
            dispatch_sortByDate:()=>dispatch(filters_Actions.sortByDate()),
            dispatch_sortByAmount:()=>dispatch(filters_Actions.sortByAmount()),
            dispatch_setStartDate:(startdate)=>dispatch(filters_Actions.setStartDate(startdate)),
            dispatch_setEndDate:(enddate)=>dispatch(filters_Actions.setEndDate(enddate))
        }
    };
    export default connect(stateMapToProps,DispatchToProps )(ExpenseListFilter);



