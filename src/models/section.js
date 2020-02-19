const mongoose = require('mongoose')

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


/*

sectionSchema.pre('save', async function (next) {
    const section = this
    next()
})

*/


const Section = mongoose.model('Section', sectionSchema)

module.exports = Section