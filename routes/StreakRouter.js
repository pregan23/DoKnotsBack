const Router = require('express').Router()
const controller = require('../controllers/StreakController')
const middleware = require('../middleware')

Router.post('/:userid/:doknotid', middleware.stripToken, middleware.verifyToken, controller.CreateNewStreak)

module.exports = Router