import React from 'react'
import { shallow } from 'enzyme'
import ExpenseDashboard from '../../src/components/ExpenseDashBoard'

test('should test Expense Dashboard page', () => {
    const wrapper = shallow(<ExpenseDashboard />)
    expect(wrapper).toMatchSnapshot()
})