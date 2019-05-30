import * as filter_actions from '../../actions/filters';
import moment from 'moment';

test("Test of setTextFilter in filter actions with default value",()=>{
    expect(filter_actions.setTextFilter()).toEqual({
        type:"setTextFilter",
        newFilters:""
    });
});

test("Test of setTextFilter in filter actions with some value",()=>{
    const text="Restro Bill";
    expect(filter_actions.setTextFilter(text)).toEqual({
        type:"setTextFilter",
        newFilters:text
    });
});

test("Test of sortByAmount in filter actions with some value",()=>{
    expect(filter_actions.sortByAmount()).toEqual({type:"sortByAmount"});
});

test("Test of sortByDate in filter actions with some value",()=>{
    expect(filter_actions.sortByDate()).toEqual({type:"sortByDate"});
});

test("Test of setStartDate in filter actions with some value",()=>{
    expect(filter_actions.setStartDate(moment(0))).toEqual(
        {
            type:"setStartDate",
            startdate:moment(0)
        });
});

test("Test of setEndDate in filter actions with some value",()=>{
    expect(filter_actions.setEndDate(moment(0))).toEqual({
        type:"setEndDate",
        endDate:moment(0)
    });
});