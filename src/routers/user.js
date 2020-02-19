const express = require('express')
const User = require('../models/user')
const router = new express.Router()

/* Create a user */
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

/* Get all users */
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

/* Get a user specified by an id */
router.get('/users/:id', async (req, res) => {
    /* Retrieve the id passed on the URL */
    const _id = req.params.id

    try {
        /* Search the user */
        const user = await User.findById(_id)

        /* If there isn't a user with the passed id... */
        if (!user) {
            return res.status(404).send()
        }

        /* If there is an user with the passed id... */
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

/* Update an user specified by id */
router.patch('/users/:id', async (req, res) => {
    /* I decide the updates allowed */
    const allowedUpdates = ['name', 'surname', 'email', 'password']

    /* Retrieve the key of the object passed */
    const updates = Object.keys(req.body)

    /* I check if there is an operation not allowed, like ID */
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        /* Search for the user */
        const user = await User.findById(req.params.id)

        /* Update the specified field */
        updates.forEach((update) => user[update] = req.body[update])

        /* Save the user */
        await user.save()

        /* If the user isn't found */
        if (!user) {
            return res.status(404).send()
        }

        /* If the user is found and updated */
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router