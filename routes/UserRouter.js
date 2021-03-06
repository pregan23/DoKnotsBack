const Router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

Router.post('/new', controller.Register)
Router.post('/login', controller.Login)
Router.get('/session', middleware.stripToken,
                        middleware.verifyToken,
                        controller.CheckSession)
Router.put('/:id/password', middleware.stripToken,
                            middleware.verifyToken,
                            controller.UpdatePassword)
Router.put('/:id/avatar', middleware.stripToken,
                            middleware.verifyToken,
                            controller.UpdateAvatar)

module.exports = Router
