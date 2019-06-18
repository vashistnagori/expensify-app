import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {expense_reducer} from '../reducers/expense.js';
import {filter_reducer} from '../reducers/filters.js';
import {auth_reducer} from '../reducers/auth.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const state= createStore(
    combineReducers({
      expenses: expense_reducer,
      filter: filter_reducer,
      auth: auth_reducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );


