const Router = require('express').Router()
const UserRouter = require('./UserRouter.js')
const DoKnotRouter = require('./DoKnotRouter.js')
const StreakRouter = require('./StreakRouter.js')
const EntryRouter = require('./EntryRouter.js')

Router.use('/user', UserRouter)
Router.use('/doknot', DoKnotRouter)
Router.use('/streak', StreakRouter)
Router.use('/entry', EntryRouter)



module.exports = Router