import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilter} from '../../components/ExpenseListFilter';
import {test_filters, test_filters2} from '../fixture/filters';

let wrapper,testFunction_setTextFilter,testFunction_sortByDate,testFunction_sortByAmount,testFunction_setStartDate,testFunction_setEndDate;


beforeEach(()=>{
testFunction_setTextFilter=jest.fn(); testFunction_sortByDate=jest.fn();
testFunction_sortByAmount=jest.fn(); testFunction_setStartDate=jest.fn();
testFunction_setEndDate=jest.fn();
wrapper = shallow(<ExpenseListFilter 
dispatch_setTextFilter={testFunction_setTextFilter} dispatch_sortByDate={testFunction_sortByDate}
dispatch_sortByAmount={testFunction_sortByAmount} dispatch_setStartDate={testFunction_setStartDate}
dispatch_setEndDate={testFunction_setEndDate} filters={test_filters}/>);
});

test("tesing ExpenseListFilter for snapshots",()=>{
 expect(wrapper).toMatchSnapshot();
});

test("tesing ExpenseListFilter for filter_data2 snapshots",()=>{
    wrapper.setProps({
    filters:test_filters2
    });
 expect(wrapper).toMatchSnapshot();
});


test("tesing ExpenseListFilter for text change",()=>{
wrapper.find('input').simulate('change', { target: { value: 'hello' } });
 expect(testFunction_setTextFilter).toHaveBeenCalledWith("hello");
});


test("tesing ExpenseListFilter for sortbydate change",()=>{
wrapper.find('select').simulate('change',{target: { value : 'Date'}});
 expect(testFunction_sortByDate).toHaveBeenCalledWith();
});


test("tesing ExpenseListFilter for SortByAmount change",()=>{
    wrapper.find('select').simulate('change',{target: { value : 'Amount'}});
    expect(testFunction_sortByAmount).toHaveBeenCalledWith();
});


test("tesing ExpenseListFilter for date change",()=>{
wrapper.find('DateRangePicker').props().onDatesChange({startDate:test_filters.startDate, endDate:test_filters.endDate});
 expect(testFunction_setStartDate).toHaveBeenCalledWith(test_filters.startDate);
 expect(testFunction_setEndDate).toHaveBeenCalledWith(test_filters.endDate);
});



test("tesing ExpenseListFilter for calander focus change",()=>{
wrapper.find('DateRangePicker').props().onFocusChange('enddate');
expect(wrapper.state().calanderFocused).toBe('enddate');
});