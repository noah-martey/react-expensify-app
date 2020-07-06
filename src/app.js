import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import configureStorage from './store/configureStorage'
import { addExpense } from './actions/expenses'
import { sortByAmount } from './actions/filters'
import getVisibleExpenses  from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'


const store = configureStorage()


store.dispatch(addExpense({ description: 'Water bill', amount: 2500 }))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 19500 }))

// setTimeout(() => {
//     store.dispatch(setTextFilter('water'))
// }, 3000)

const state = store.getState()

const vsExp = getVisibleExpenses( state.expenses, state.filters ) 
console.log(vsExp)
console.log(store.getState().expenses[0])


const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"))



