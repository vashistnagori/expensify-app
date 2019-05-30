   
   import React from "react";
   import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
   import ExpenseDashboard from '../components/ExpenseDashboard';
   import CreateExpense from '../components/CreateExpense';
   import EditExpence from '../components/EditExpence';
   import Help from '../components/Help';
   import NotFound from '../components/NotFound'
   import Header from '../components/Header';

    const AppRoutes=()=>(
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
    <Route path="/" component={ExpenseDashboard}  exact={true}/>
    <Route path="/create" component={CreateExpense} />
    <Route path="/edit/:id" component={EditExpence} />
    <Route path="/help" component={Help} />
    <Route component={NotFound} />
    </Switch>
    </div>
    </BrowserRouter>  
);
export default AppRoutes;
