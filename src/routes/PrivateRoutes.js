import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute=({isAuthenticated,uid, component: Component, ...rest})=>{
    console.log(uid);
    return (<Route {...rest} component={(props)=>{
        return isAuthenticated ? (
       <div><Header/><Component {...props} /></div>
       ):(
           <Redirect to="/"/>
           )
}
}/>
)};

const mapStateToProps=(state)=>({
uid:state.auth.uid,
isAuthenticated: !!state.auth.uid
});


export default connect(mapStateToProps)(PrivateRoute);