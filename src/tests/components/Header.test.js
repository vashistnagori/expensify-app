import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';


test('testing Header component',()=>{
const wrapper= shallow(<Header startLogout={()=>{}}/>);
expect(wrapper).toMatchSnapshot();
});

test("Testing logout function on headre page ",()=>{
    const skyLoginOutFunction=jest.fn();
    const wrapper= shallow(<Header startLogout={skyLoginOutFunction}/>);
    wrapper.find('button').simulate("click");
    expect(skyLoginOutFunction).toHaveBeenCalledWith();
    });