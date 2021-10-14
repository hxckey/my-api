const express = require('express');
const router = express.Router();

const Actor = require('../models/actors')

// actors index route
router.get('/', async (req, res) => {
    try {
        const actors = await Actor.all
        res.json({actors})
    } catch(err) {
        res.status(500).json({err})
    }
})

// Create actor route
router.post('/', async (req, res) => {
    try {
        const actor = await Actor.create(req.body.name, req.body.films, req.body.awards)
        res.json(actor)
    } catch(err) {
        res.status(404).json({err})
    }
})

module.exports = router;