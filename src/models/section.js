const mongoose = require('mongoose')
const Item = require('./item')

const sectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    visible: {
        type: Boolean,
        required: false,
        default: false
    }
})

sectionSchema.virtual('items', {
    ref: 'Item',
    localField: '_id',
    foreignField: 'section'
})

sectionSchema.pre('delete', async function (next) {
    const section = this
    Item.deleteMany({ section: section._id})
    next()
})

const Section = mongoose.model('Section', sectionSchema)

module.exports = Section