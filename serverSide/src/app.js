const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const publicRouter = require('./routers/publicRouter')

const app = express()
const port = process.env.PORT || 3000

// setup CORS
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(publicRouter)

app.get('*', (req, res) => {
    res.send({
        title: '404',
        errorMessage: 'Page not found'
    })
})

app.listen(port, () => {
    console.log("Server is up on port " + port + ".")
})