// const person = {
//     name: 'Noah',
//     age: '20',
//     location: {
//         city: 'Tema',
//         temp: 30
//     }
// }

// const { name: firstname = 'Anonymous', age } = person

// console.log(`${firstname} is ${age}. `)

// const { city, temp: temperature } = person.location;

// if (city && typeof temperature === 'number') {
//     console.log(`I live in ${city} and its ${temperature}^ hot`)
// }

// const book = {
//     title: 'Ego is something else',
//     author: 'Ryan blah',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-published' } = book.publisher

// console.log(publisherName)


const coffee = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [Coffee, , mediumPrice] = coffee

console.log(`A medium ${Coffee} costs ${mediumPrice}`)