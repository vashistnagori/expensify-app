import React from 'react';
import {auth_reducer} from '../../reducers/auth';

test("testing auth reducer for the default state",()=>{
    const state=auth_reducer(undefined,"@@INIT");
    expect(state).toEqual({});
});


test("testing auth reducer for Login",()=>{
    const state=auth_reducer({},{type:"login", uid:"121162168"});
    expect(state).toEqual({uid:"121162168"});
});


test("testing auth reducer for LogOut",()=>{
    const state=auth_reducer({uid:"121162168"},{type:"logout"});
    expect(state).toEqual({});
});