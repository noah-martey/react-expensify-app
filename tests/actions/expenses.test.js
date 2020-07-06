import { addExpense, editExpense, removeExpense } from '../../src/actions/expenses'

test('should return a removeExpense object', () => {
    const action = removeExpense({ id: '123' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        expense: '123'
    })
})

test('should return an editExpense object', () => {
    const action = editExpense( '1234', { note: 'Some updates' } )
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        expense: '1234',
        updates: {
            note: 'Some updates'
        }
    })
})

test('should return a addExpense object', () => {
    const expenseData = {
        description: 'Internet',
        amount: '158',
        createdAt: '1500',
        note: 'Harness the power of the internet'
    }

    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }, 
    })
})

test('should return a default object', () => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }

    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }  
    })
})

