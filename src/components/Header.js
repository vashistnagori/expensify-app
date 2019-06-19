import React from "react";
import {Link} from 'react-router-dom';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';

export const Header=(props)=>(
    <div className="header">
    <div className="content-container">
    <div className="header__content">
    <Link  to="/dashboard" exact={true} className="header__title"> <h1>Expencify app</h1></Link> &nbsp; 
   <button className="button button--link " onClick={props.startLogout}>Logout</button>
   </div> 
   </div> 
    </div>
);
const mapDispatchToProps=(dispatch)=>({
    startLogout:startLogout()
});
const ConnectedHeader= connect(undefined,mapDispatchToProps)(Header);

export default ConnectedHeader;