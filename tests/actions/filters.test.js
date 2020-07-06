import moment from 'moment'
import { setByStartDate, setByEndDate, sortByDate, sortByAmount, setTextFilter } from '../../src/actions/filters'

test('should test the setStartDate action', () => {
    const action = setByStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_BY_STARTDATE',
        date: moment(0)
    })
})

test('should test the endByEndDate action', () => {
    const action = setByEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_BY_ENDDATE',
        endDate: moment(0)
    })
})

test('should sort by date', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        date: 'date'
    })
})

test('should sort by amount', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        amount: 'amount'
    })
})

test('should return a text to filter by', () => {
    const text_name = 'rent'
    const action = setTextFilter(text_name)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: text_name
    })
})

test('should return a default when there\'s no filter', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})