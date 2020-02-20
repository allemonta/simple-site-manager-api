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
    visible: {
        type: Boolean,
        required: false,
        default: false
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Section'
    }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item