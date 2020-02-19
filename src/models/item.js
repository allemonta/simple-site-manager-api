const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    path: {
        type: String,
        required: true,
        trim: true
    },
    classes: {
        type: String,
        trim: true
    },
    sectionId: {
        type: String,
        required: true
    },
    visible: {
        type: Boolean,
        required: false,
        default: false
    }
})


/*

itemSchema.pre('save', async function (next) {
    const item = this
    next()
})

*/


const Item = mongoose.model('Item', itemSchema)

module.exports = Item