const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

//unsure what these lines do - ask Beth/Romeo
const actorsRoutes = require('./controllers/actors')
const movieRoutes = require('./controllers/movies')

server.use('/actors', actorsRoutes)
server.use('/movies', movieRoutes)

const port = process.env.PORT || 3000;

// Root route
server.get('/', (req, res) => res.send('Hi cinephile!'))

module.exports = server