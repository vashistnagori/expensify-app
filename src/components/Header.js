import React from "react";
import {NavLink} from 'react-router-dom';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';

export const Header=(props)=>(
    <div>
    <h1>Expencify app</h1>
    <NavLink activeClassName="is_active" to="/dashboard" exact={true}>HomePage</NavLink> &nbsp;
    <NavLink activeClassName="is_active" to="/create">create</NavLink> &nbsp;
   <button onClick={props.startLogout}>Logout</button>
    </div>
);
const mapDispatchToProps=(dispatch)=>({
    startLogout:startLogout()
});
const ConnectedHeader= connect(undefined,mapDispatchToProps)(Header);

export default ConnectedHeader;