const express = require('express')
const Section = require('../models/section')
const router = new express.Router()

router.post('/sections', async (req, res) => {
    const section = new Section(req.body)

    try {
        await section.save()
        res.status(201).send(section)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/sections', async (req, res) => {
        try {
        const sections = await Section.find({})
        res.send(sections)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/sections/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const section = await Section.findById(_id)

        if (!section)
            return res.status(404).send()

        res.send(section)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/sections/:id', async (req, res) => {
    const _id = req.params.id
    const allowedUpdates = ['title', 'visible']
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const section = await Section.findById(_id)

        updates.forEach((update) => section[update] = req.body[update])

        await section.save()

        if (!section) {
            return res.status(404).send()
        }

        res.send(section)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/sections/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const section = await User.findByIdAndDelete(_id)

        if (!section) {
            return res.status(404).send()
        }

        res.send(section)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router