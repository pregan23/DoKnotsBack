const Router = require('express').Router()
const controller = require('../controllers/DoKnotController')
const middleware = require('../middleware')

Router.post('/:id/new',  middleware.stripToken,
                            middleware.verifyToken,
                            controller.AddDoKnot)

module.exports = Router