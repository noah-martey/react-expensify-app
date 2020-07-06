import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../src/components/ExpenseListItem'
import expenses from '../fixtures/expenseData'


test('should test snapshot of expenselistitem', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})