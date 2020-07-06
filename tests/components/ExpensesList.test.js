import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../src/components/ExpenseList'
import expenses from '../fixtures/expenseData'

test('should test the snapshot of the expense filter', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should test when the expense array is empty', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})
