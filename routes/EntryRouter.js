const Router = require('express').Router()
const controller = require('../controllers/EntryController')
const middleware = require('../middleware')

Router.post('/:userid/new', middleware.stripToken,middleware.verifyToken,controller.NewEntry)
Router.get('/feed', middleware.stripToken,middleware.verifyToken,controller.GetSharedEntries)
Router.get('/:userid', middleware.stripToken,middleware.verifyToken,controller.GetUsersEntries)

Router.put('/:userid/update/:entryid', middleware.stripToken,middleware.verifyToken,controller.EditEntry)
Router.delete('/:userid/delete/:entryid', middleware.stripToken,middleware.verifyToken,controller.DeleteEntry)

module.exports = Router