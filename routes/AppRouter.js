const Router = require('express').Router()
const UserRouter = require('./UserRouter.js')
const DoKnotRouter = require('./DoKnotRouter.js')
const StreakRouter = require('./StreakRouter.js')

Router.use('/user', UserRouter)
Router.use('/doknot', DoKnotRouter)
Router.use('/streak', StreakRouter)



module.exports = Router