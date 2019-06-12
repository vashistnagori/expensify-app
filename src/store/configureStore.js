import {combineReducers, createStore, applyMiddleware,compose} from 'redux';
import {expense_reducer} from '../reducers/expense.js';
import {filter_reducer} from '../reducers/filters.js';
import thunk from 'redux-thunk';


const composeEnhansers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const state= createStore(
    combineReducers({
    expenses:expense_reducer,
    filter:filter_reducer
}),
composeEnhansers(applyMiddleware(thunk))
);

