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