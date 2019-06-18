import React from 'react';
import {login, logout} from '../../actions/auth.js';

test("testing login action generator",()=>{
    const action= login('123445');
    expect(action).toEqual({type:'login',uid:"123445"});
});

test("testing Logout action generator",()=>{
    const action= logout();
    expect(action).toEqual({type:'logout'});
});


