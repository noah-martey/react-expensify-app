import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'


export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            textarea: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        let description = e.target.value
        this.setState(() => ({ description }))
    }

    onTextAreaChange = (e) => {
        let textarea = e.target.value
        this.setState(() => ({ textarea })) 
    }
    
    onAmountChange = (e) => {
        let amount  = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }  
    }
    
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            let errMessage = 'Please enter a description or an amount'
            this.setState(() => ({ error: errMessage }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.textarea
            })
        }
    }

render() {
     return (
     <div>
         { this.state.error && <p>{ this.state.error }</p>}
         <form onSubmit={this.onSubmit}>
              <input autoFocus
                 type='text' 
                 placeholder='description' 
                 value={this.state.description} 
                 onChange={this.onDescriptionChange}/>

               <input 
                type='number' 
                placeholder='amount' 
                value={this.state.amount} 
                onChange={this.onAmountChange}/>
    
            <SingleDatePicker 
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calenderFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />

            <textarea 
            placeholder='A descritption about your expense' 
            value={this.state.textarea} 
            onChange={this.onTextAreaChange}>
            </textarea>

            <button>Add expense</button>
        </form>          
    </div>  
        )
    }
}