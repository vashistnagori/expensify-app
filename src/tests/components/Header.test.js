import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header';


test('testing Header component',()=>{
const wrapper= shallow(<Header />);
expect(wrapper).toMatchSnapshot();
});