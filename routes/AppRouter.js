const Router = require('express').Router()
const UserRouter = require('./UserRouter.js')
const DoKnotRouter = require('./DoKnotRouter.js')

Router.use('/user', UserRouter)
Router.use('/doknot', DoKnotRouter)



module.exports = Router