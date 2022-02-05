const express = require('express')
const res = require('express/lib/response')
const author = require('../models/author')
const router = express.Router()
const Author = require('../models/author')

// All Authors Route
router.get('/', (req, res) => {
    res.render('authors/index')
})

// New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new', {author: new Author()})
})

// Create Author Route
router.post('/', (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    author.save((err, newAuthor) => {
        if (err) {
            res.render('authors/new', {
                author: author,
                errorMessage: 'Error Creating Author'
            })
        } else {
            // res.redirect('authors/${newAuthor.id}')
            res.redirect('authors')
        }
    })
})


module.exports = router