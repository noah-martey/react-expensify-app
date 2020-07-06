import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../src/components/AddExpensePage'
import expenses from '../fixtures/expenseData'

let addExpense, history, wrapper

beforeEach(() => {
    addExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})

test('should test the rendering AddExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should test the prop action on AddExpensePage', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
    
})