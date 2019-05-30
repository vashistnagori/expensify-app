import React from "react";
import {NavLink} from 'react-router-dom';
const Header=()=>(
    <div>
    <h1>Expencify app</h1>
    <NavLink activeClassName="is_active" to="/" exact={true}>HomePage</NavLink> &nbsp;
    <NavLink activeClassName="is_active" to="/create">create</NavLink> &nbsp;
    <NavLink activeClassName="is_active" to="/edit">edit</NavLink> &nbsp;
    </div>
);

export default Header;