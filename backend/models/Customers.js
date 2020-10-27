const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customersSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: Number
    }
}, {
    collection: 'customers'
})

module.exports = mongoose.model('Customers', customersSchema)