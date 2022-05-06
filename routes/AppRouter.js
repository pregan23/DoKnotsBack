const Router = require('express').Router()
const UserRouter = require('./UserRouter.js')

Router.use('/user', UserRouter)



module.exports = Router