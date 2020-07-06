import expenseFilter from '../../src/selectors/expenses'
import expense from '../fixtures/expenseData'
import moment from 'moment'


test('should test the return type of the expense selector', () => {
    const filter = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined 
    }

    const action = expenseFilter(expense, filter)
    expect(action).toEqual([expense[0], expense[1]])
})

test('should filter by startDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined 
    }

    const action = expenseFilter(expense, filter)
    expect(action).toEqual([expense[2], expense[0]])
})

test('should filter by endDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }

    const action = expenseFilter(expense, filter)
    expect(action).toEqual([expense[0], expense[1]])

})

test('should filter by date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const action = expenseFilter(expense, filter)
    expect(action).toEqual([expense[2], expense[0], expense[1]])
})

test('should filter by amount', () => {
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const action = expenseFilter(expense, filter)
    expect(action).toEqual([expense[0], expense[1], expense[2]])
})