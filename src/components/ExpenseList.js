import React from 'react'
import ExpenseListItem from './ExpenseListItem'
import selectedExpense from '../selectors/expenses'
import { connect } from 'react-redux'

 export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
               <h2>No expenses found</h2>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })
            )
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpense( state.expenses, state.filters )
    }
} 

export default connect(mapStateToProps)(ExpenseList)

