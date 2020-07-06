import { createStore, combineReducers } from 'redux'



const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses( state.expenses, state.filters )
    console.log(visibleExpenses);
    
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter('coffee'))

store.dispatch(sortByAmount())

// store.dispatch(sortByDate())

// store.dispatch(setByStartDate(125))
// store.dispatch(setByStartDate())

// store.dispatch(setByEndDate(1258))
// store.dispatch(setTextFilter({ text: 'text' }))



// console.log(store.getState())

const demoState = {
    expenses: [{
        id: 'wefdsga231',
        description: 'January Rent',
        note: 'This was the final payment made for that address',
        amount: 54500,
        createdAt: 0
    }],
    
    filter: {
        text: 'rent',
        sortBy: 'aount',
        startDate: undefined,
        endDate: undefined
    }
}
