import expensesReducer from '../../src/reducers/expenses'
import expense from '../fixtures/expenseData'

test('should test for default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should rest removing expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: expense[1].id
    }

    const state = expensesReducer(expense, action)
    expect(state).toEqual([expense[0], expense[2]])
})

test('should rest removing expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: '-1'
    }

    const state = expensesReducer(expense, action)
    expect(state).toEqual(expense)
})

test('should add an expense', () => {
    const expense_to_add = {
        id: '4',
        description: 'Testing_data',
        amount: 23,
        createdAt: 1,
        note: 'I was testing data with this expense'
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense: expense_to_add
    }

    const state = expensesReducer(expense, action)
    expect(state).toEqual([...expense, expense_to_add])
})

test('should edit an expense', () => {
    const amount = 29300

    const action = {
        type: 'EDIT_EXPENSE',
        expense: expense[1].id,
        updates: {
            amount
        }
    }

    const state = expensesReducer(expense, action)
    expect(state[1].amount).toBe(amount)
})

test('should not edit expense if id is not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        expense: '-4'
    }

    const state = expensesReducer(expense, action)
    expect(state).toEqual(expense)
})