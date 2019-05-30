import {filter_reducer} from '../../reducers/filters';
import moment from 'moment';

const defaultFilterState={
    text:"",
    SortBy:'date',
    startDate:moment().startOf("month"),
    endDate:moment().endOf("month")
};

//default 
test("test of filter reducer on INIT",()=>{
expect(filter_reducer(undefined,{type:"@@INIT"})).toEqual(defaultFilterState);
});
//sortByAmount
test("test of filter reducer on type: sortByAmount",()=>{
    const state=filter_reducer(undefined,{type:"sortByAmount"});
expect(state.SortBy).toBe("amount");
});
//sortByDate
test("test of filter reducer on type: sortByDate",()=>{
    const state=filter_reducer({...defaultFilterState, SortBy:"amount" },{type:"sortByDate"});
expect(state.SortBy).toBe("date");
});
//setTextFilter
test("test of filter reducer on type: setTextFilter",()=>{
    const action={type:"setTextFilter",newFilters:"coffee"};
    const state=filter_reducer({...defaultFilterState, text:"rent" },action);
expect(state.text).toBe("coffee");
});

//setStartDate
test("test of filter reducer on type: setStartDate",()=>{
    const newstartdate=moment(0).add(45,"days").endOf("month");
    const action={type:"setStartDate",startdate:newstartdate};
    const state=filter_reducer(defaultFilterState,action);
    expect(state.startDate).toBe(newstartdate);
});

//setEndDate
test("test of filter reducer on type: setEndDate",()=>{
    const newEndDate=moment(0).add(100,"days").endOf("month");
    const action={type:"setEndDate",endDate:newEndDate};
    const state=filter_reducer(defaultFilterState,action);
    expect(state.endDate).toBe(newEndDate);
});