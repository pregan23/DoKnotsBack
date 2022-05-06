const Router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

Router.post('/new', controller.Register)
Router.post('/login', controller.Login)