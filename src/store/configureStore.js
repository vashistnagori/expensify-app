import {combineReducers, createStore} from 'redux';
import {expense_reducer} from '../reducers/expense.js';
import {filter_reducer} from '../reducers/filters.js';

export const state= createStore(
    combineReducers({
    expenses:expense_reducer,
    filter:filter_reducer
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

