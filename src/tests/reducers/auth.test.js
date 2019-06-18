import React from 'react';
import authReducer from '../../reducers/auth';

test("testing auth reducer for the default state",()=>{
    const state=authReducer(undefined,"@@INIT");
    expect(state).toEqual({});
});


test("testing auth reducer for Login",()=>{
    const state=authReducer({},{type:"LOGIN", uid:"121162168"});
    expect(state).toEqual({uid:"121162168"});
});


test("testing auth reducer for LogOut",()=>{
    const state=authReducer({uid:"121162168"},{type:"LOGOUT"});
    expect(state).toEqual({});
});