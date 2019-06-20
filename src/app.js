import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import {state} from './store/configureStore';
import  AppRoutes, {history} from './routes/AppRoutes';
import * as expense_action from './actions/expense';
import * as filter_action from './actions/filters';
import {filterExpense} from './selectors/expense';
import 'normalize.css/normalize.css';
import './style/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import {login, logout} from './actions/auth';
import LoadingPage from './components/LoadingPage'

// state.dispatch(expense_action.addExpense({description:"water bill", amount:3000, createdAt:2500}));
// state.dispatch(expense_action.addExpense({description:"gas bill", createdAt:2000}));
// state.dispatch(expense_action.addExpense({description:"rent", amount:91000, createdAt:1000}));
// //console.log(filterExpense(realState.expenses, realState.filter));
const jsx=(
    <Provider store={state}>
    <AppRoutes />
    </Provider>);

    ReactDOM.render(<LoadingPage />, document.querySelector("#app"));

///////////////////////////
let hasRendered=false;
const renderApp=()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.querySelector("#app"));
        hasRendered=true;
    }
}   


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
    console.log("Login",user.uid);
    state.dispatch(login(user.uid));
   state.dispatch(expense_action.startSetExpense()).then(()=>{
    renderApp();
    if(history.location.pathname=='/'){
        history.push("/dashboard");
    }
   });
    }
    else{
        renderApp();
        history.push('/');
        console.log("log out ");
        state.dispatch(logout());
    }
    });    
///////////////////////
state.subscribe(()=>{
console.log("hello",state.getState());
}); 
