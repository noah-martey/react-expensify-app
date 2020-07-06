import React from 'react'
import { setTextFilter, sortByDate, sortByAmount, setByStartDate, setByEndDate} from '../actions/filters'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'


export class ExpenseListFilters extends React.Component {
    state = {
       calenderFocused: null
    }
     
    onDateChange = ({ startDate, endDate }) => {
       this.props.dispatch(setByStartDate(startDate))
       this.props.dispatch(setByEndDate(endDate))
    }

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }))
    }

    onTextChange = (e) => {
        this.props.dispatch(setTextFilter(e.target.value))
    }

    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.dispatch(sortByDate())
        } else if (e.target.value === 'amount') {
            this.props.dispatch(sortByAmount())
        }
    }

    render() {
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={this.onTextChange} />
                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>

                <DateRangePicker 
                  startDate={this.props.filters.startDate}
                  endDate={this.props.filters.endDate}
                  onDatesChange={this.onDateChange}
                  focusedInput={this.state.calenderFocused}
                  onFocusChange={this.onFocusChange}
                  showClearDates={true}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
                />
            </div>
        )  
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)