
//SET_TEXT_FILTER
export const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text 
})

//SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    amount: 'amount'
})

//SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    date: 'date'
})

//SET_BY_STARTDATE
export const setByStartDate = ( date = undefined ) => ({
    type: 'SET_BY_STARTDATE',
    date
})

//SET_BY_ENDDATE
export const setByEndDate = ( endDate = undefined ) => ({
    type: 'SET_BY_ENDDATE',
    endDate 
})

