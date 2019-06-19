import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

 export const LoginPage=(props)=>{
    return (<div className="box-layout">
            <div className="box-layout__box"> 
            <h1 className="box-layout__title">Expensify</h1>
            <p>Calculate your expenses. App by Vashist Nagori</p>
            <button onClick={props.startLogin} className="button">Login with Google</button>
            </div>
        </div>);
};


const mapDispatchToprops=(dispatch)=>({
startLogin:(dispatch)=>{startLogin()(dispatch)}
});

export default connect(undefined,mapDispatchToprops)(LoginPage);

