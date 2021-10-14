const express = require('express');
const router = express.Router();

const Movie = require('../models/movies')

// movies index route
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.all
        res.json({movies})
    } catch(err) {
        res.status(500).json({err})
    }
})

// Create movie route
router.post('/', async (req, res) => {
    try {
        const movie = await Movie.create(req.body.name, req.body.director, req.body.review)
        res.json(movie)
    } catch(err) {
        res.status(404).json({err})
    }
})

module.exports = router;