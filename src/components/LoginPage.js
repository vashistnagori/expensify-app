import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

 export const LoginPage=(props)=>{
    return (<div>
        <button onClick={props.startLogin}>Login</button>
        </div>);
};


const mapDispatchToprops=(dispatch)=>({
startLogin:(dispatch)=>{startLogin()(dispatch)}
});

export default connect(undefined,mapDispatchToprops)(LoginPage);

