import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import {Route, Redirect} from 'react-router-dom';
import LoginPage from '../components/LoginPage';

export const PublicRoutes=({isAuthenticated,uid, component: Component, ...rest})=>{

    return (<Route {...rest} component={(props)=>{
        return isAuthenticated ? (
            <Redirect to="/dashboard"/>
       ):(
        <div><Component {...props} /></div> 
           )
}
}/>
)

}

const mapStateToProps=(state)=>({
    uid:state.auth.uid,
    isAuthenticated: !!state.auth.uid
    });
    
    
    export default connect(mapStateToProps)(PublicRoutes);