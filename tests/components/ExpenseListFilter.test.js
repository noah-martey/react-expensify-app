import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { ExpenseListFilters } from '../../src/components/ExpenseListFilters'
import { filter, altFilter } from '../fixtures/filters'

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByAmount = jest.fn()
    sortByDate = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters
        filters = {filter}
        setTextFilter = {setTextFilter}
        sortByAmount = {sortByAmount}
        sortByDate = {sortByDate}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
    />)
})

test('should test the ExpenseListFilter', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should test the ExpenseListFilter with alt filter', () => {
    wrapper.setProps({
        filters: altFilter
    })
    expect(wrapper).toMatchSnapshot()
})