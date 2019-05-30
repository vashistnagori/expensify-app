import {filterExpense} from '../../selectors/expense';
import moment from 'moment';
import {testexp} from '../fixture/expense';

//Test of TEXT FILTER on expense selector

test("Test of TEXT FILTER on expense selector",()=>{
    const testfilter={text:"o",SortBy:'date',startDate:undefined, endDate:undefined};
    const result=filterExpense(testexp,testfilter);
    expect(result).toEqual([testexp[3],testexp[2]]);
    });
//Test of startdate
test("Test of start date on expense selector",()=>{
    const testfilter={text:"",SortBy:'date',startDate:moment(0), endDate:undefined};
    const result=filterExpense(testexp,testfilter);
    expect(result).toEqual([testexp[3],testexp[2],testexp[1],testexp[0]]);
    });
//Test of Enddate
test("Test of End date on expense selector",()=>{
    const testfilter={text:"",SortBy:'date',startDate:undefined, endDate:moment(0).add(9,'days')};
    const result=filterExpense(testexp,testfilter);
    expect(result).toEqual([testexp[2],testexp[1],testexp[0],testexp[4]]);
    });
//Test of sort by date
test("Test of sort by date on expense selector",()=>{
    const testfilter={text:"",SortBy:'date',startDate:undefined, endDate:undefined};
    const result=filterExpense(testexp,testfilter);
    expect(result).toEqual([testexp[3],testexp[2],testexp[1],testexp[0],testexp[4]]);
    });
//Test of sort by Amount
test("Test of sort by Amount on expense selector",()=>{
    const testfilter={text:"",SortBy:'amount',startDate:undefined, endDate:undefined};
    const result=filterExpense(testexp,testfilter);
    expect(result).toEqual([testexp[1],testexp[2],testexp[3],testexp[0],testexp[4]]);
    });