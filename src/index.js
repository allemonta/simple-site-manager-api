const express = require('express')
const mongoose = require('./db/mongoose')

const userRouter = require('./routers/user')
const itemRouter = require('./routers/item')
const sectionRouter = require('./routers/section')

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(userRouter)
app.use(itemRouter)
app.use(sectionRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Item = require('./models/item')
const main = async() => {
    const item = await Item.findById('5e4ea7df3ad98e3c4cc2f342') 
    await item.populate('section').execPopulate()
    await item.section.populate('items').execPopulate()
    
    console.log(item.section.items)
}

//main()