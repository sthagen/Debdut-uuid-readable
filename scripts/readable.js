const id = require('../')

const uuid = '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const readable = id.generate(uuid)
const inverse = id.inverse(readable)

console.log( uuid )
console.log( readable )
console.log( inverse )