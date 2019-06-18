 import React from "react";
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboard from '../components/ExpenseDashboard';
import CreateExpense from '../components/CreateExpense';
import EditExpence from '../components/EditExpence';
import LoginPage from '../components/LoginPage';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import {firebase} from '../firebase/firebase';


   export const history=createHistory();

    const AppRoutes=()=>(
    <Router history={history}>
    <div>
    <Switch>
    <PublicRoutes path="/" component={LoginPage}  exact={true}/>
    <PrivateRoute path="/dashboard" component={ExpenseDashboard}  exact={true}/>
    <PrivateRoute path="/create" component={CreateExpense} />
    <PrivateRoute path="/edit/:id" component={EditExpence} />
    <Route path="/help" component={Help} />
    <Route component={NotFound} />
    </Switch>
    </div>
    </Router>  
);

export default AppRoutes;
