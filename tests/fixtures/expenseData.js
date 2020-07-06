import moment from 'moment'

export default [{
    id: '1',
    description: 'Internet',
    amount: 1293,
    createdAt: 0,
    note: 'Harness the power of the internet'
}, {
    id: '2',
    description: 'Rent',
    amount: 293,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    note: 'Settling your rent'
}, {
    id: '3',
    description: 'Light',
    amount: 123,
    createdAt: moment(0).add(4, 'days').valueOf(),
    note: 'Electricity bill'
}]