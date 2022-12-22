const express = require('express')
const router = express.Router()

const Movie = require('../../models/Movie')

router.get('/test', (request, response) => response.send('Movie Router Testing Passed!'))

router.get('/', (request, response) => {
    Movie.find()
        .then(movies => response.json(movies))
        .catch(error =>
            response.status(404).json({ error: 'No Movies Found in the Database!' }))
})

router.get('/:_id', (request, response) => {
    Movie.findById(request.params._id)
        .then(movie => response.json(movie))
        .catch(error =>
            response.status(404).json({ error: `No Movie with id ${request.params._id}` }))
})

router.post('/', (request, response) => {
    Movie.create(request.body)
        .then(movie =>
            response.json({ message: 'Movie Added Successfully' }))
        .catch(error =>
            response.status(400).json({ error: 'Unable to Add Movie' }))
})

router.put('/:_id', (request, response) => {
    Movie.findByIdAndUpdate(request.params._id, request.body)
        .then(movie =>
            response.json({ message: `Movie with id ${request.params._id} Updated Successfully` }))
        .catch(error =>
            response.status(400).json({ error: `Unable to Update Movie with id ${request.params._id}` }))
})

router.delete('/:_id', (request, response) => {
    Movie.findByIdAndRemove(request.params._id, request.body)
        .then(movie =>
            response.json({ message: `Movie with id ${request.params._id} Removed Successfully` }))
        .catch(error =>
            response.status(404).json({ error: `No Movie with id ${request.params._id}` }))
})

module.exports = router