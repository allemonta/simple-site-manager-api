const express = require('express')
const db = require('./../db/db')
const router = new express.Router()

router.get('', (req, res) => {
    res.send({
        hello: 'hello'
    })
})

router.get('/links', (req, res) => {
    db.getLinks().then(({err, result}) => {
        res.status(200).send(err ? err : result)
    });
})

router.get('/sections', (req, res) => {
    db.getSections().then(({err, result}) => {
        res.status(200).send(err ? err : result)
    });
})

module.exports = router