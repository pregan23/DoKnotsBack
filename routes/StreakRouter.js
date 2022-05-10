const Router = require('express').Router()
const controller = require('../controllers/StreakController')
const middleware = require('../middleware')

Router.post('/:userid/:doknotid', middleware.stripToken, 
                                    middleware.verifyToken, 
                                    controller.CreateNewStreak)

Router.get('/mystreaks/:userid', middleware.stripToken, middleware.verifyToken, controller.GetUserStreaks)

Router.put('/:streakid', middleware.stripToken, middleware.verifyToken, controller.UpdateStreak)

module.exports = Router