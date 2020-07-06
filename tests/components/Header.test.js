import { shallow } from 'enzyme'
import React from 'react';
import Header from '../../src/components/Header';

test('should test the header component', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()


    // expect(wrapper.find('h1').text()).toBe('Extensify')
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})