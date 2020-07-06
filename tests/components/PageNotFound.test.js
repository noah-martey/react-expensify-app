import React from 'react'
import { shallow } from 'enzyme'
import PageNotFound from '../../src/components/PageNotFound'

test('should test PageNotFound page', () => {
    const wrapper = shallow(<PageNotFound />)
    expect(wrapper).toMatchSnapshot()
})