const express = require('express')
const router = express.Router()
const { post, get ,getByName, put, remove, getByEmail } = require('./data/controllers')

router.post('/users', post)
router.getByEmail('/users/email/:email',getByEmail)
router.get('/users/name/:name',get)
router.post('connectionList', post)
router.put('connectionList',put)
router.delete('/connetionList/:id', remove)
router.post('/lifeProject', post)
router.put('/lifeProject', put)
router.delete('/lifeProject/:id', remove)
router.post('/rooms', post)
router.get('/rooms',get)
router.getByName('/rooms/name/:name',getByName)

module.exports = router