const Router = require('express').Router()
const controller = require('../controllers/DoKnotController')
const middleware = require('../middleware')

Router.post('/:id/new',                 middleware.stripToken,
                                        middleware.verifyToken,
                                        controller.AddDoKnot)
Router.put('/:userid/update/:doknotid', middleware.stripToken,
                                        middleware.verifyToken,
                                        controller.UpdateDoKnot)
Router.get('/feed', middleware.stripToken,middleware.verifyToken,controller.GetSharedDoKnots)
Router.get('/:id',                      middleware.stripToken,
                                        middleware.verifyToken,
                                        controller.GetUserDoKnots)
Router.delete('/:userid/delete/:doknotid', middleware.stripToken,
                                            middleware.verifyToken,
                                            controller.RemoveDoKnot)
module.exports = Router